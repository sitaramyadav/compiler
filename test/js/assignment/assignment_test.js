'use strict'

var assert = require('assert');
var chai = require('chai');
var fs = require('fs');
var jison = require('jison');
var backus_naur_form = fs.readFileSync('/Users/sitaram/Project/compiler/src/js/assignment/assignment_grammer.jison', 'utf8');

var parser = new jison.Parser(backus_naur_form);
var tree_parser = require('/Users/sitaram/Project/compiler/src/js/assignment/tree_parser.js');


describe('parsing mathematical expressions', () => {

    describe('grouping mathematical expression', () => {

        it('should return (1+2 for the input 1+2', () =>{
             let tree = parser.parse('1+2');
             let expected =  tree.parenthesis();
             let result =  '(1+2)';
             chai.expect(expected).to.equal(result);
        });

        it('should return ((1+2)+3) for the input 1+2+3/', () => {
            let tree = parser.parse('1+2+3');
            let expected = tree.parenthesis();
            chai.expect(expected).to.equal('((1+2)+3)');
        });

        it('should return (((1+2)+3)+4) for the input 1+2+3+4', () => {

            var tree = parser.parse('1+2+3+4');
            chai.expect(tree.parenthesis()).to.equal('(((1+2)+3)+4)');

        });

        it('It throw error if does not match mathematical expression', () => {
            assert.throws(parser.parse, Error, 'Invalid Input');

        });
    });


});
