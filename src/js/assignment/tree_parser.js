var number_to_words = require('number-to-words');

class TreeParser {
    constructor(leftChild,parentNode, rightChild) {
        this.leftChild = leftChild;
        this.parentNode = parentNode;
        this.rightChild = rightChild;
    }
    parenthesis (leftChild,rightChild) {
        let self = this;
        var  str = '';
        if(leftChild instanceof TreeParser){
            leftChild = leftChild.parenthesis(leftChild.leftChild,leftChild.rightChild);
        }
        if(rightChild instanceof TreeParser){
            rightChild = leftChild.parenthesis(rightChild.leftChild, rightChild.rightChild);
        }
        return this.addParenthesis(leftChild, rightChild);
    }

    addParenthesis(leftChild, rightChild) { // operater has to be passed as parameter
        return'(' + leftChild + '+' + rightChild + ')';
    }

    toWords (){
        return number_to_words.toWords(tree.leftChild);
    }

}

module.exports = TreeParser;
