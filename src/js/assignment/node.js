var number_to_words = require('number-to-words');
class OperatorNode {
    constructor(node){
        this.node = node;
    }
   evaluate (first_num,second_num) {
       return eval(`${first_num}${this.node}${second_num}`);
   }


   toWords () {
       var operators = {'+':'plus','*':'times'}
       return operators[this.node];
   }
}

module.exports = OperatorNode;