/**
 * 
 * JSplay
 * 
 * A Javascript implementation of Splay Tree binary search algorithm.
 * Supports insert, search and delete. Splays on every operation, regardless
 * of the presence of the associated key prior to that operation. 
 *
 */
module.exports = function() {

    var root = null;

    /**
     * Node definition used throughout the code.
     */
    var NodeDefinition = function(key, value){        
        this.key = key;
        this.value = value;
        this.leftNode = null;   // left subtree  
        this.rightNode = null;  // right subtree
        this.height = 0;        // node height
    }

    /**
     * Splay tree insertion.
     * 
     * Adds a node to the tree and Splay it to root node. 
     */
    this.add = function(key, value){
        throw new Error("not implemented yet...");
    }

    /**
     * Splay tree main function.
     * 
     * Splay a node to the root of the tree. If there isn't a node with 
     * that key, the last node along the search path for the key is splay to 
     * the root.   
     */
    this.splay = function(node, key){
        throw new Error("not implemented yet...");
    }

    /**
     * Size 
     * 
     * Helper function that calculates tree size.
     */
    this.size  = function(){
        return this.treeSize(root);
    }

    /**
     * Subtree Size 
     * 
     * Helper function that calculates subtree size starting
     * from a given node;
     */
    this.treeSize  = function(node){
        if(node == null) {
            return 0;
        }
        return 1 + this.treeSize(node.leftNode) + this.treeSize(node.rightNode);
    }

    /**
     * Rotate right 
     * 
     * Helper function that rotates node positions in closewise direction 
     */
    this.rotateRight  = function(node){
        var left = node.left;
        node.left  = left.right;
        node.right = node
        return left;
    }

    /**
     * Rotate left 
     * 
     * Helper function that rotates node positions in counterclosewise direction 
     */
    this.rotateRight  = function(node){
        var left = node.right;
        node.right  = left.left;
        node.left = node;
        return left;
    }

}