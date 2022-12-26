%lex
%options case-insensitive

numero [0-9]+

%%

[0-9]+("."[0-9]+)?\b  {return 'decimal'}
{numero}              {return 'numero'}

"*"                   { return '*'}
"/"                   { return '/'}
"-"                   { return '-'}
"+"                   { return '+'}
"("                   { return 'parA'}
")"                   { return 'parC'}
"["                   { return 'corA'}
"]"                   { return 'corC'}
";"                   { return 'pyc'}

/* Palabras reservadas */
"evaluar"               { console.log("Reconocio : "+ yytext); return 'evaluar'}

/* SIMBOLOS ER */
[0-9]+("."[0-9]+)?\b  { console.log("Reconocio : "+ yytext); return 'decimal'}


/* Espacios */
[\s\r\n\t]                  {/* skip whitespace */}

<<EOF>>               return 'EOF'

.                       { console.error('este es un error lexico: ' + yytext + ', en la linea: ' + yylloc.first_line + ', en la columna: ' + (yylloc.first_column+1)); }

/lex

/* Area de imports */
%{
    //const evaluar = require('../Clases/Evaluar');
%}

%left '+' '-'
%left '*' '-'
%left UNARIO

%start INIT

%% 

INIT
    :INSTRUCCIONES EOF { $$ = $1; return $$;}
;

INSTRUCCIONES
    :INSTRUCCIONES INSTRUCCION { $$ = $1; $$.push($2);}
    |INSTRUCCION {$$ = new Array(); $$.push($1);}
;

INSTRUCCION
    :evaluar corA E corC pyc { $$ = $3;}
    | error pyc {console.log}
;

/*
E
    : E '-' E  {$$ = Number($1) - Number($3);}
    | E '+' E  {$$ = Number($1) + Number($3);}
    | E '/' E  {$$ = Number($1) / Number($3);}
    | E '*' E  {$$ = Number($1) * Number($3);}
    | numero {$$ = $1;}
    | decimal {$$ = $1;}
;
*/

E
    : E '-' E  {$$ = $1 - $3;}
    | E '+' E  {$$ = $1 + $3;}
    | E '/' E  {$$ = $1 / $3;}
    | E '*' E  {$$ = $1 * $3;}
    | '-' E %prec UNARIO {$$ = -$2;}
    | parA E parC {$$ = $2;}
    | numero {$$ = Number($1);}
    | decimal {$$ = Number($1);}
    |       { console.log('vacio');}
;