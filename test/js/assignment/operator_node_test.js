var chai = require('chai');
var mocha = require('mocha');
var OperatorNode = require('/Users/sitaram/Project/compiler/src/js/assignment/node.js');

describe('Operator Node', () => {

    it('should evaluate', () => {
       var  operator_node = new OperatorNode('+');
        chai.expect(operator_node.evaluate(2,3)).to.equal(5);
    });

    it('should return toString', () => {
        var  operator_node = new OperatorNode('+');
        chai.expect(operator_node.toString('2','3')).to.equal('2+3');
    });

    it('should represent operator in words', () => {
        var operator_node = new OperatorNode('+');
        chai.expect(operator_node.toWords()).to.equal('plus');
    });
});
