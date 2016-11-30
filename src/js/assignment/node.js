var number_to_words = require('number-to-words');
class OperatorNode {
    constructor(node){
        this.node = node;
    }
   evaluate (first_num,second_num) {
       return eval(`${first_num}${this.node}${second_num}`);
   }

   toString (first_str,second_str){
        return first_str + this.toOperator(this.node) + second_str;
    }
   toOperator () {
       var operators = {'+':'+','*':'*'}
       return operators[this.node];
   }
   toWords () {
        var operators = {'+':'plus','*':'times'};
       return operators[this.node];
   };
}

module.exports = OperatorNode;