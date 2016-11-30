
/* description: Parses and executes mathematical expressions. */

/* lexical grammar */


%{


var filepath = require('filepath');
var path = filepath.create('./src/js/assignment/tree_parser.js');
var TreeParser = require(path+'');

var operator_node_path = filepath.create('./src/js/assignment/node.js');
var OperatorNode = require(operator_node_path+'');

%}


%lex
%%
\s+						/* skip spaces */
[0-9]+("."[0-9]+)?\b	return 'NUMBER'
"+"						return '+'
"*"						return '*'
"("						return '('
")"						return ')'
<<EOF>>					return 'EOF'
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
    {
        $2 = new OperatorNode($2);
		$$ = new TreeParser($1,$2,$3);
    }

| NUMBER
{$$ = Number(yytext);}

;


