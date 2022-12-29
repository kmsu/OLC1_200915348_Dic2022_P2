%lex
%options case-insensitive
%option yylineno

Decimal [0-9]+("."[0-9]+)?\b 
D [0-9]+\b
id [a-zñA-ZÑ_][a-zñA-ZÑ0-9_]*
//--> Cadena
escapechar  [\'\"\\ntr]
escape      \\{escapechar}
aceptacion  [^\"\\]+
cadena      (\"({escape} | {aceptacion})*\")

//--> Caracter
escapechar2  [\\ntr]
escape2      \\{escapechar2}
aceptada2    [^\'\\]
caracter     (\'({escape2}|{aceptada2})\')

%%

//Comentario simple
("//".*)  { /*Ignorar*/ }

//Comentario multilinea
"/*""/"*([^*/]|[^*]"/"|"*"[^/])*"*"*"*/" { /*Ignorar*/}

//Reservadas
"evaluar"               return 'evaluar'; 
"null"                  return 'resNull';
"void"                  return 'resVoid';
"writeline"             return 'resWrite';
"return"                return 'resReturn';
"break"                 return 'resBreak';
"continue"              return 'resContinue';

//Tipos de datos
"int"                   return 'resInt';
"double"                return 'resDouble';
"char"                  return 'resChar';
"boolean"                  return 'resBool';
"string"                return 'resString';

//Reservadas estructuras de control
"if"                    return 'resIf';
"else"                  return 'resElse';
"for"                   return 'resFor';
"while"                 return 'resWhile';
"do"                    return 'resDo';
"switch"                return 'resSwitch';
"case"                  return 'resCase';
"default"               return 'resDefault';

//operadores Incremento Decremento
"++"                     return 'Incremento';
"--"                     return 'Decremento';

//Operadores Aritmeticos
"+"                     return 'Mas';
"-"                     return 'Menos';
"*"                     return 'Por';
"/"                     return 'Div';

//Operadores Relacionales
"<="                    return 'MenorIgual'
"<"                     return 'MenorQue'
">="                    return 'MayorIgual'
">"                     return 'MayorQue'
"=="                    return 'Igualdad'
"!="                    return 'Distinto'
"="                     return 'Igual'

//Operadores Logicos
"&&"                    return 'And';
"||"                    return 'Or';
"!"                     return 'Not';

//Operadores Booleanos
"true"                  return 'Verdadero';
"false"                 return 'Falso';

//Agrupacion
"("                     return 'ParA';
")"                     return 'ParC';
"["                     return 'CorA';
"]"                     return 'CorC';
"{"                     return 'LlaveA';
"}"                     return 'LlaveC';
";"                     return 'PComa';
","                     return 'Coma';
":"                     return 'DosPuntos';
"?"                     return 'Interrogacion';

{id}                    return 'Id';
{cadena}                return 'Cadena';
{caracter}              return 'Chaar';
{Decimal}               return 'Decimal';
{D}                     return 'Entero';

//Espacios en blanco
[ \r\t\s\n\f]+          { /*Ignorar*/ }

<<EOF>>                 return 'EOF'

.                       { console.error('este es un error lexico: ' + yytext + ', en la linea: ' + yylloc.first_line + ', en la columna: ' + yylloc.first_column+1); }

/lex

/* Area de imports */
%{
    //const evaluar = require('../Clases/Evaluar');
%}

%right 'Interrogacion'
%left 'Or'
%left 'And'
%right 'Not'
%left 'Igualdad' 'MenorQue' 'MayorQue' 'MenorIgual' 'MayorIgual' 'Distinto'
%left 'Mas' 'Menos'
%left 'Por' 'Div'
%right UMenos

%start INIT

%% 
INIT
    :INSTRUCCIONES EOF { console.log("reconocio la cadena") }
;

INSTRUCCIONES
    :INSTRUCCIONES INSTRUCCION { $$ = $1; $$.push($2);}
    |INSTRUCCION { $$ = new Array(); $$.push($1); }
    |error INSTRUCCION { console.error("Sintactico", this._$.first_line, this._$.first_column,"Caracter no valido: " + yytext); }
;

INSTRUCCION
    :DECLARACION { $$ = $1; }
    |ASIGNACION { $$ = $1; }
    |IF { $$ = $1; }
    |WHILE { $$ = $1; }
    |SWITCH { $$ = $1; }
    |DO { $$ = $1; }
    |FOR { $$ = $1; }
    |BREAK { $$ = $1; }
    |CONTINUE { $$ = $1; }
    |RETURN { $$ = $1; }
    |PRINT { $$ = $1; }
    |METODO { $$ = $1; }
    |FUNCION { $$ = $1; }
;

METODO
    :resVoid Id ParA ParC LlaveA INSTRUCCIONES LlaveC { $$ = new classFuncion.default($2, null, $6); }
    |resVoid Id ParA PARAMETRO ParC LlaveA INSTRUCCIONES LlaveC { $$ = new classFuncion.default($2, $4, $7); }
;

FUNCION
    :TIPO Id ParA ParC LlaveA INSTRUCCIONES LlaveC { $$ = new classFuncion.default($2, null, $6); }
    |TIPO Id ParA PARAMETRO ParC LlaveA INSTRUCCIONES LlaveC { $$ = new classFuncion.default($2, $4, $7); }
;

PARAMETRO
    :PARAMETRO Coma TIPO Id { $$ = $1; $$.push($4); }
    |TIPO Id { $$ = new Array(); $$.push($2); }
;

/* int var1, var2, var3; */
DECLARACION
    :TIPO LISTAVARIABLES Igual EXPRESION PComa { $$ = $4; }
    |TIPO LISTAVARIABLES PComa { console.log("reconocio una declaracion sin expresion"); }
;

ASIGNACION
    :LISTAVARIABLES Igual EXPRESION PComa { console.log("reconocio una asignaicion"); }
;

/* var1, var2, var3  */
LISTAVARIABLES
    :LISTAVARIABLES Coma Id { $$ = $1; $$.push($3); }
    |Id { $$ = new Array(); $$.push($1); }
;

TIPO
    :resString {$$ = $1;}
    |resChar {$$ = $1;}
    |resBool {$$ = $1;}
    |resInt {$$ = $1;}
    |resDouble {$$ = $1;}
;

EXPRESION
    //ARITMETICOS
    : EXPRESION 'Mas' EXPRESION   {$$ = $1 + $3;}
    | EXPRESION 'Menos' EXPRESION {$$ = $1 - $3;}
    | EXPRESION 'Por' EXPRESION   {$$ = $1 * $3;}
    | EXPRESION 'Div' EXPRESION   {$$ = $1 / $3;}
    //RELACIONALES
    | EXPRESION 'MayorQue' EXPRESION    {$$ = $1 + $3;}
    | EXPRESION 'MenorQue' EXPRESION    {$$ = $1 + $3;}
    | EXPRESION 'Igualdad' EXPRESION    {$$ = $1 + $3;}
    | EXPRESION 'Distinto' EXPRESION    {$$ = $1 + $3;}
    | EXPRESION 'MayorIgual' EXPRESION  {$$ = $1 + $3;}
    | EXPRESION 'MenorIgual' EXPRESION  {$$ = $1 + $3;}
    //LOGICOS
    | EXPRESION 'And' EXPRESION {$$ = $1 + $3;}
    | EXPRESION 'Or' EXPRESION   {$$ = $1 + $3;}
    | 'Not' EXPRESION   {$$ = $2;}
    //UNARIOS
    | 'Menos' EXPRESION %prec UMenos {$$ = -$2;}
    //AGRUPACION 
    | ParA EXPRESION ParC {$$ = $2;}
    //TERMINALES
    | Cadena {$$ = $1;}
    | Caracter {$$ = $1;}
    | Entero {$$ = $1;}
    | Decimal {$$ = $1;}
    | Verdadero {$$ = $1;}
    | Falso {$$ = $1;}
    | Id   {$$ = $1;}
;

IF
    //:resIf ParA EXPRESION ParC LlaveA INSTRUCCIONES LlaveC { $$ = new classIf.default($3, $6, null); }
    :resIf ParA EXPRESION ParC LlaveA INSTRUCCIONES LlaveC ELSE { $$ = new classIf.default($3, $6, $8); }
;

ELSE
    :resElse resIf ParA EXPRESION ParC LlaveA INSTRUCCIONES LlaveC ELSE { $$ = new classElse.default($4, $7, $9); }
    |resElse LlaveA INSTRUCCIONES LlaveC { $$ = new classElse.default(null, $3, null); }
    |
;

WHILE
    :resWhile ParA EXPRESION ParC LlaveA INSTRUCCIONES LlaveC { $$ = new classWhile.default($3, $6);}
;

SWITCH
    :resSwitch ParA EXPRESION ParC LlaveA CASE LlaveC { $$ = new classSwitch.default($3, $6);}
;

CASE
    :resCase Caracter DosPuntos INSTRUCCIONES CASE { $$ = new classCase.default($2, $4, $5);}
    |resCase Cadena DosPuntos INSTRUCCIONES CASE { $$ = new classCase.default($2, $4, $5);}
    |resCase Decimal DosPuntos INSTRUCCIONES CASE { $$ = new classCase.default($2, $4, $5);}
    |resCase Entero DosPuntos INSTRUCCIONES CASE { $$ = new classCase.default($2, $4, $5);}
    |resDefault DosPuntos INSTRUCCIONES { $$ = new classCase.default(null, $3, null);}
;

DO
    :resDo LlaveA INSTRUCCIONES LlaveC resWhile ParA EXPRESION ParC PComa { $$ = new classDo.default($3, $7);}
;

FOR
    :resFor ParA TIPO Id Igual EXPRESION PComa Id RELACIONAL EXPRESION PComa Id Incremento ParC LlaveA INSTRUCCIONES LlaveC { $$ = new classFor.default($4, $6, $10, $12, $13, $16); }
    |resFor ParA TIPO Id Igual EXPRESION PComa Id RELACIONAL EXPRESION PComa Id Decremento ParC LlaveA INSTRUCCIONES LlaveC { $$ = new classFor.default($4, $6, $10, $12, $13, $16); }
;

RELACIONAL
    :MayorQue { $$ = $1; }
    |MenorQue { $$ = $1; }
    |MayorIgual { $$ = $1; }
    |MenorIgual { $$ = $1; }
;

BREAK
    :resBreak PComa { $$ = new classBreak.default($1);}
;

CONTINUE
    :resContinue PComa { $$ = new classBreak.default($1);}
;

RETURN
    :resReturn EXPRESION PComa { $$ = new classReturn.default($1, $2); }
    |resReturn PComa { $$ = new classReturn.default($1, null); }
;

PRINT
    :resWrite ParA EXPRESION ParC PComa { $$ = new classPrint.default($5, null);} 
;

