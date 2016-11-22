let assert = require('assert');
let fs = require('fs');
let jison = require('jison');
let backus_naur_form = fs.readFileSync('/Users/sitaram/Project/compiler/src/js/grammer.jison', 'utf8');

let parser = new jison.Parser(backus_naur_form);



describe('Mathematical expression', function() {

        it('It should return each expression in bracket', function() {

            let expectedResult = parser.parse('1+2+3+4');
            let result = '(((1+2)+3)+4)';

            assert.equal(expectedResult,result);
        });

    it('It throw error if does not match mathematical expression', function() {

        assert.throws(parser.parse,Error,'Invalid Input');

    });
});