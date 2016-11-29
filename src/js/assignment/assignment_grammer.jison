
/* description: Parses and executes mathematical expressions. */

/* lexical grammar */
%lex
%%

\s+                   /* skip whitespace */
[0-9]+("."[0-9]+)?\b  return 'NUMBER'
"-"                   return '-'
"+"                   return '+'
<<EOF>>               return 'EOF'
.                     return 'INVALID INPUT'

/lex

/* operator associations and precedence */

%left '+' '-'

%start expressions

%% /* language grammar */

expressions
: e EOF
{ 
    return $1; }
;

e
    : e '+' e
{$$ = '('+$1+ '+'+ $3+')';}

| NUMBER
{$$ = Number(yytext);}

;


