var number_to_words = require('number-to-words');

class TreeParser {
    constructor(left_child,parent_node, right_child) {
        this.left_child = left_child;
        this.parent_node = parent_node;
        this.right_child = right_child;
    }
    parenthesis () {
        if(this.left_child instanceof TreeParser){
            this.left_child = this.left_child.parenthesis();
        }
        if(this.right_child instanceof TreeParser){
            this.right_child = this.left_child.parenthesis();
        }
        return this.concat();
    }

    concat() {
        return'(' + this.parent_node.toString(this.left_child,this.right_child)+ ')';
    }

    toWords (){
        return number_to_words.toWords(this.left_child);
    }

}

module.exports = TreeParser;
