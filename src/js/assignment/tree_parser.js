var number_to_words = require('number-to-words');

class TreeParser {
    constructor(leftChild,parentNode, rightChild) {
        this.leftChild = leftChild;
        this.parentNode = parentNode;
        this.rightChild = rightChild;
    }
    parenthesis () {
        if(this.leftChild instanceof TreeParser){
            this.leftChild = this.leftChild.parenthesis();
        }
        if(this.rightChild instanceof TreeParser){
            this.rightChild = this.leftChild.parenthesis();
        }
        return this.addParenthesis();
    }

    addParenthesis() { // operater has to be passed as parameter
        return'(' + this.leftChild + '+' + this.rightChild + ')';
    }

    toWords (){
        return number_to_words.toWords(this.leftChild);
    }

}

module.exports = TreeParser;
