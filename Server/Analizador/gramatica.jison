%lex
%options case-insensitive
%option yylineno

Decimal [0-9]+("."[0-9]+)\b 
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
    const decimal = require('../Analizador/Instrucciones/ExpresionesTerminales/Decimal');
    const numero = require('../Analizador/Instrucciones/ExpresionesTerminales/Numero');
    const booleano = require('../Analizador/Instrucciones/ExpresionesTerminales/Booleano');
    const cadena = require('../Analizador/Instrucciones/ExpresionesTerminales/Cadena');
    const chhar = require('../Analizador/Instrucciones/ExpresionesTerminales/Chhar');
    const id = require('../Analizador/Instrucciones/ExpresionesTerminales/Identificador');
    const incremental = require('../Analizador/Instrucciones/ExpresionesTerminales/Incremental');

    const TipoDato = require('../Analizador/Instrucciones/TablaSimbolos/TipoDato').TipoDato;
    const classTipo = require('../Analizador/Instrucciones/Tipo');

    const aritmetica = require('../Analizador/Instrucciones/OperacionesExpresiones/Aritmetica');

    const declaracion = require('../Analizador/Instrucciones/Declaracion');
    const asignacion = require('../Analizador/Instrucciones/Asignacion');
    const classPrint = require('../Analizador/Instrucciones/Print');
    const classBreak = require('../Analizador/Instrucciones/Break');
    const classContinue = require('../Analizador/Instrucciones/Continue');
    const classReturn = require('../Analizador/Instrucciones/Return');
    const classFuncion = require('../Analizador/Instrucciones/Funcion');
    const classMetodo = require('../Analizador/Instrucciones/Funcion');
    const classLlamadaFuncion = require('../Analizador/Instrucciones/LlamadaFuncion');

    const classIf = require('../Analizador/Instrucciones/EstructurasControl/If');
    const classElse = require('../Analizador/Instrucciones/EstructurasControl/Else');
    const classSwitch = require('../Analizador/Instrucciones/EstructurasControl/Switch');
    const classCase = require('../Analizador/Instrucciones/EstructurasControl/Case');
    const classWhile = require('../Analizador/Instrucciones/EstructurasControl/While');
    const classDo = require('../Analizador/Instrucciones/EstructurasControl/Do');
    const classFor = require('../Analizador/Instrucciones/EstructurasControl/For');

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
    |INCREMENTALES PComa { $$ = $1; }
    |METODO { $$ = $1; }
    |FUNCION { $$ = $1; }
    |LLAMADAFUNCION PComa{ $$ = $1; }
    |VECTORES { $$ = $1; }
    |LLAMADAVECTOR PComa{ $$ = $1; }
    |error { console.error("Error Sintactico", this._$.first_line, this._$.first_column,"Token no valido: " + yytext); analisis.putError("Sintactico", this._$.first_line, this._$.first_column, "Token Inesperado: " + yytext); $$ = null; }
;

/* int var1, var2, var3; */
DECLARACION
    :TIPO LISTAVARIABLES Igual EXPRESION PComa { $$ = new declaracion.default($1, $2, $4, this._$.first_line, this._$.first_column); }
    |TIPO LISTAVARIABLES PComa                 { $$ = new declaracion.default($1, $2, null, this._$.first_line, this._$.first_column); }
;

ASIGNACION
    :LISTAVARIABLES Igual EXPRESION PComa { $$ = new asignacion.default($1, $3, this._$.first_line, this._$.first_column); }
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
    | LLAMADAFUNCION { $$ = null; }
    | LLAMADAVECTOR { $$ = null; }
    | Id   { $$ = new id.default($1, this._$.first_line, this._$.first_column); }   
;

INCREMENTALES
    :Id Incremento {$$ = new incremental.default($1, '++', this._$.first_line, this._$.first_column);}
    |Id Decremento {$$ = new incremental.default($1, '--', this._$.first_line, this._$.first_column);}
;

IF
    :resIf ParA EXPRESION ParC LlaveA INSTRUCCIONES LlaveC ELSE { $$ = new classIf.default($3, $6, $8, this._$.first_line, this._$.first_column); }
;

ELSE
    :resElse IF { $$ = $2;}
    |resElse LlaveA INSTRUCCIONES LlaveC { $$ = new classElse.default($3, this._$.first_line, this._$.first_column); }
    |
;

WHILE
    :resWhile ParA EXPRESION ParC LlaveA INSTRUCCIONES LlaveC { $$ = new classWhile.default($3, $6, this._$.first_line, this._$.first_column);}
;

SWITCH
    :resSwitch ParA EXPRESION ParC LlaveA CASE LlaveC { $$ = new classSwitch.default($3, $6, this._$.first_line, this._$.first_column); }
;

CASE
    :resCase Caracter DosPuntos INSTRUCCIONES CASE  { $$ = new classCase.default($2, $4, $5, this._$.first_line, this._$.first_column); }
    |resCase Cadena DosPuntos INSTRUCCIONES CASE    { $$ = new classCase.default($2, $4, $5, this._$.first_line, this._$.first_column); }
    |resCase Decimal DosPuntos INSTRUCCIONES CASE   { $$ = new classCase.default($2, $4, $5, this._$.first_line, this._$.first_column); }
    |resCase Entero DosPuntos INSTRUCCIONES CASE    { $$ = new classCase.default($2,$4, $5, this._$.first_line, this._$.first_column); }
    |resDefault DosPuntos INSTRUCCIONES             { $$ = new classCase.default(null, $3, null, this._$.first_line, this._$.first_column); }
    |
;

DO
    :resDo LlaveA INSTRUCCIONES LlaveC resWhile ParA EXPRESION ParC PComa { $$ = new classDo.default($7, $3, this._$.first_line, this._$.first_column);}
;

FOR
    :resFor ParA TIPO Id Igual EXPRESION PComa EXPRESION PComa INCREMENTALES ParC LlaveA INSTRUCCIONES LlaveC { $$ = new classFor.default(null, $13, this._$.first_line, this._$.first_column);}
;

BREAK
    :resBreak PComa { $$ = new classBreak.default("break", this._$.first_line, this._$.first_column);}
;

CONTINUE
    :resContinue PComa { $$ = new classContinue.default("break", this._$.first_line, this._$.first_column);}
;

RETURN
    :resReturn EXPRESION PComa { $$ = new classReturn.default($2, this._$.first_line, this._$.first_column); }
    |resReturn PComa { $$ = new classReturn.default(null, this._$.first_line, this._$.first_column); }
;

PRINT
    :resWrite ParA EXPRESION ParC PComa { $$ = new classPrint.default($3, this._$.first_line, this._$.first_column);} 
;

METODO
    :resVoid Id ParA ParC LlaveA INSTRUCCIONES LlaveC { $$ = new classMetodo.default($2, $6, this._$.first_line, this._$.first_column);} 
    |resVoid Id ParA PARAMETRO ParC LlaveA INSTRUCCIONES LlaveC { $$ = new classMetodo.default($2, $7, this._$.first_line, this._$.first_column);} 
;

FUNCION 
    :TIPO Id ParA ParC LlaveA INSTRUCCIONES LlaveC { $$ = new classFuncion.default($2, $6, this._$.first_line, this._$.first_column);} 
    |TIPO Id ParA PARAMETRO ParC LlaveA INSTRUCCIONES LlaveC { $$ = new classFuncion.default($2, $7, this._$.first_line, this._$.first_column);} 
;

PARAMETRO
    :PARAMETRO Coma TIPO Id { $$ = $1; $$.push($4); }
    |TIPO Id { $$ = new Array(); $$.push($2); }
;

LLAMADAFUNCION
    :Id ParA ParC {$$ = new classLlamadaFuncion.default($1, this._$.first_line, this._$.first_column);} 
    |Id ParA LISTAEXPRESION ParC {$$ = new classLlamadaFuncion.default($1, this._$.first_line, this._$.first_column);} 
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