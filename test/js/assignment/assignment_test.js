'use strict'

let assert = require('assert');
let fs = require('fs');
let jison = require('jison');
let backus_naur_form = fs.readFileSync('./src/js/assignment_grammer.jison', 'utf8');

let parser = new jison.Parser(backus_naur_form);


describe('parsing mathematical expressions', () => {

    describe('name', () => {

    })
    it('It should return each expression in bracket', () =>  {

        let expectedResult = parser.parse('1+2+3+4');
        let result = '(((1+2)+3)+4)';

        assert.equal(expectedResult,result);
    });

    it('It throw error if does not match mathematical expression', () =>  {

        assert.throws(parser.parse,Error,'Invalid Input');

    });
});
