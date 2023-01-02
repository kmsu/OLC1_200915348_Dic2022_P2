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
"new"                   return 'resNew';

//Tipos de datos
"int"                   return 'resInt';
"double"                return 'resDouble';
"char"                  return 'resChar';
"boolean"               return 'resBool';
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
"%"                     return 'Mod';

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
{caracter}              return 'Caracter';
{Decimal}               return 'Decimal';
{D}                     return 'Entero';

//Espacios en blanco
[ \r\t\s\n\f]+          { /*Ignorar*/ }

<<EOF>>                 return 'EOF'

.                       {console.log("error lexico"); analisis.putError("Lexico", yylloc.first_line+"", yylloc.first_column+1+"", "Caracter no valido: " + yytext); }

/lex

/* Area de imports */
%{
    const numero = require('../Analizador/Instrucciones/ExpresionesTerminales/Numero');
    const decimal = require('../Analizador/Instrucciones/ExpresionesTerminales/Decimal');
    const booleano = require('../Analizador/Instrucciones/ExpresionesTerminales/Booleano');
    const cadena = require('../Analizador/Instrucciones/ExpresionesTerminales/Cadena');
    const chhar = require('../Analizador/Instrucciones/ExpresionesTerminales/Chhar');
    const id = require('../Analizador/Instrucciones/ExpresionesTerminales/Identificador');

    const TipoDato = require('../Analizador/Instrucciones/TablaSimbolos/TipoDato').TipoDato;
    const classTipo = require('../Analizador/Instrucciones/Tipo');

    const aritmetica = require('../Analizador/Instrucciones/OperacionesExpresiones/Aritmetica');

    const declaracion = require('../Analizador/Instrucciones/Declaracion');

    const classPrint = require('../Analizador/Instrucciones/Print');

    const classAnalisis = require('./Analisis');
    var analisis = new classAnalisis;
%}

%right 'Interrogacion'
%left 'Or'
%left 'And'
%right 'Not'
%left 'Igualdad' 'MenorQue' 'MayorQue' 'MenorIgual' 'MayorIgual' 'Distinto'
%left 'Mas' 'Menos'
%left 'Por' 'Div' 'Mod'
%right UMenos

%start INIT

%% 
INIT
    :INSTRUCCIONES EOF { analisis.putArbol($1); $$=analisis; return $$; }
;

INSTRUCCIONES
    :INSTRUCCIONES INSTRUCCION { $$ = $1; $$.push($2);}
    |INSTRUCCION { $$ = new Array(); $$.push($1); }
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
    |LLAMADAFUNCION PComa{ $$ = $1; }
    |VECTORES { $$ = $1; }
    |LLAMADAVECTOR PComa{ $$ = $1; }
    |error { console.error("Error Sintactico", this._$.first_line, this._$.first_column,"Token no valido: " + yytext); }
;

/* int var1, var2, var3; */
DECLARACION
    :TIPO LISTAVARIABLES Igual EXPRESION PComa { $$ = new declaracion.default($1, $2, $4, this._$.first_line, this._$.first_column); }
    |TIPO LISTAVARIABLES PComa                 { $$ = new declaracion.default($1, $2, null, this._$.first_line, this._$.first_column); }
;

ASIGNACION
    :LISTAVARIABLES Igual EXPRESION PComa { $$ = $3; }
;

/* var1, var2, var3  */
LISTAVARIABLES
    :LISTAVARIABLES Coma Id { $$ = $1; $$.push($3); }
    |Id { $$ = new Array(); $$.push($1); }
;

TIPO
    :resString  {$$ = new classTipo.default(TipoDato.CADENA, this._$.first_line, this._$.first_column);}
    |resChar    {$$ = new classTipo.default(TipoDato.CARACTER, this._$.first_line, this._$.first_column);}
    |resBool    {$$ = new classTipo.default(TipoDato.BOOLEANO, this._$.first_line, this._$.first_column);}
    |resInt     {$$ = new classTipo.default(TipoDato.ENTERO, this._$.first_line, this._$.first_column);}
    |resDouble  {$$ = new classTipo.default(TipoDato.DECIMAL, this._$.first_line, this._$.first_column);}
;

EXPRESION
    //ARITMETICOS
    : EXPRESION 'Mas' EXPRESION   {$$ = new aritmetica.default($1, '+', $3, this._$.first_line, this._$.first_column);}
    | EXPRESION 'Menos' EXPRESION {$$ = new aritmetica.default($1, '-', $3, this._$.first_line, this._$.first_column);}
    | EXPRESION 'Por' EXPRESION   {$$ = new aritmetica.default($1, '*', $3, this._$.first_line, this._$.first_column);}
    | EXPRESION 'Div' EXPRESION   {$$ = new aritmetica.default($1, '/', $3, this._$.first_line, this._$.first_column);}
    | EXPRESION 'Mod' EXPRESION   {$$ = new aritmetica.default($1, '%', $3, this._$.first_line, this._$.first_column);}
    //RELACIONALES
    | EXPRESION 'MayorQue' EXPRESION    {$$ = $1 > $3;}
    | EXPRESION 'MenorQue' EXPRESION    {$$ = $1 < $3;}
    | EXPRESION 'Igualdad' EXPRESION    {$$ = $1 == $3;}
    | EXPRESION 'Distinto' EXPRESION    {$$ = $1 != $3;}
    | EXPRESION 'MayorIgual' EXPRESION  {$$ = $1 >= $3;}
    | EXPRESION 'MenorIgual' EXPRESION  {$$ = $1 <= $3;}
    //LOGICOS
    | EXPRESION 'And' EXPRESION {$$ = $1 && $3;}
    | EXPRESION 'Or' EXPRESION   {$$ = $1 || $3;}
    | 'Not' EXPRESION   {$$ = !$2;}
    //UNARIOS
    | 'Menos' EXPRESION %prec UMenos {$$ = new aritmetica.default($2, 'u', $2, this._$.first_line, this._$.first_column);}
    //AGRUPACION 
    | ParA EXPRESION ParC {$$ = $2;}
    //TERNARIO
    | EXPRESION Interrogacion EXPRESION DosPuntos EXPRESION { $$ = $1 + "?" + $3 + ":" + $5; }
    //TERMINALES
    | Cadena { $$ = new cadena.default($1.substr(1, yyleng - 2), this._$.first_line, this._$.first_column); }
    | Caracter { $$ = new chhar.default($1.charCodeAt(1), this._$.first_line, this._$.first_column); }
    | Entero { $$ = new numero.default(Number($1), this._$.first_line, this._$.first_column); }
    | Decimal { $$ = new decimal.default(Number($1), this._$.first_line, this._$.first_column); }
    | Verdadero { $$ = new booleano.default(true, this._$.first_line, this._$.first_column); }
    | Falso { $$ = new booleano.default(false, this._$.first_line, this._$.first_column); }
    | LLAMADAFUNCION { $$ = $1; }
    | LLAMADAVECTOR { $$ = $1; }
    | Id   { $$ = new id.default($1, this._$.first_line, this._$.first_column); }   
;

INCREMENTALES
    :Id Incremento {$$ = $1+$2;}
    |Id Decremento {$$ = $1+$2;}
;

IF
    //:resIf ParA EXPRESION ParC LlaveA INSTRUCCIONES LlaveC { $$ = new classIf.default($3, $6, null); }
    :resIf ParA EXPRESION ParC LlaveA INSTRUCCIONES LlaveC ELSE { $$ = "if " + $3 + " ins " + $6 + " else " +$8; }
;

ELSE
    :resElse resIf ParA EXPRESION ParC LlaveA INSTRUCCIONES LlaveC ELSE { $$ = "exp " + $4 + " ins " + " else " +$7; }
    |resElse LlaveA INSTRUCCIONES LlaveC { $$ = $3; }
    |
;

WHILE
    :resWhile ParA EXPRESION ParC LlaveA INSTRUCCIONES LlaveC { $$ = $3+$6;}
;

SWITCH
    :resSwitch ParA EXPRESION ParC LlaveA CASE LlaveC { $$ = $3 + $6;}
;

CASE
    :resCase Caracter DosPuntos INSTRUCCIONES CASE { $$ = $4+$5;}
    |resCase Cadena DosPuntos INSTRUCCIONES CASE { $$ = $4+$5; }
    |resCase Decimal DosPuntos INSTRUCCIONES CASE { $$ = $4+$5;}
    |resCase Entero DosPuntos INSTRUCCIONES CASE { $$ = $4+$5;}
    |resDefault DosPuntos INSTRUCCIONES { $$ = $3;}
;

DO
    :resDo LlaveA INSTRUCCIONES LlaveC resWhile ParA EXPRESION ParC PComa { $$ = $3+" "+$7;}
;

FOR
    :resFor ParA TIPO Id Igual EXPRESION PComa EXPRESION PComa INCREMENTALES ParC LlaveA INSTRUCCIONES LlaveC { $$ = "De " + $6 + " as " + $8 + " Inc " + $10 + " ins " + $13; }
;

BREAK
    :resBreak PComa { $$ = $1;}
;

CONTINUE
    :resContinue PComa { $$ = $1;}
;

RETURN
    :resReturn EXPRESION PComa { $$ = $2; }
    |resReturn PComa { $$ = $1; }
;

PRINT
    :resWrite ParA EXPRESION ParC PComa { $$ = new classPrint.default($3, this._$.first_line, this._$.first_column);} 
;

METODO
    :resVoid Id ParA ParC LlaveA INSTRUCCIONES LlaveC { $$ = $6; }
    |resVoid Id ParA PARAMETRO ParC LlaveA INSTRUCCIONES LlaveC { $$ = $7; }
;

FUNCION
    :TIPO Id ParA ParC LlaveA INSTRUCCIONES LlaveC { $$ = $6; }
    |TIPO Id ParA PARAMETRO ParC LlaveA INSTRUCCIONES LlaveC { $$ = $7; }
;

PARAMETRO
    :PARAMETRO Coma TIPO Id { $$ = $1; $$.push($4); }
    |TIPO Id { $$ = new Array(); $$.push($2); }
;

LLAMADAFUNCION
    :Id ParA ParC {$$ = $1;}
    |Id ParA LISTAEXPRESION ParC { $$ = $1;}
;

LISTAEXPRESION
    :LISTAEXPRESION Coma EXPRESION { $$ = $1; $$.push($3); }
    |EXPRESION { $$ = new Array(); $$.push($1); }
;

VECTORES
    :TIPO Id CorA CorC Igual resNew TIPO CorA EXPRESION CorC PComa { $$ = $1 + " " + $2 + " " + $9; }
    |TIPO Id CorA CorC Igual LlaveA LISTAEXPRESION LlaveC PComa { $$= $1 + " " + $2+ " " + $7; }
;

LLAMADAVECTOR
    :Id CorA EXPRESION CorC { $$= $1 + $3; }
;