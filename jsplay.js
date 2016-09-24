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

    this.root = null;

    /**
     * Node definition used throughout the code.
     */
    var NodeDefinition = function(key, value){        
        this.key = key;
        this.value = value;
        this.left = null;   // left subtree  
        this.right = null;  // right subtree
    }

    /**
     * Check if the tree contains a given node by its key. 
     */
    this.contains = function(key){
        return this.getNode(key) != null;
    }

    /**
     * Returns a node's value.
     * 
     * Search for a node by its key and return it's  value.
     */
    this.get = function(key){
        var node = this.getNode(key);
        if(node != null){
            return node.value;
        }
        return null;
    }

    /**
     * Returns a node.
     * 
     * Search for a node by its key 
     */
    this.getNode = function(key){
        var node = this.splay(this.root, key);

        if(node != null){
            this.root = node;
            if(this.root.key === key){
                return this.root;
            }
        }

        return null;
    }

    /**
     * Splay tree insertion.
     * 
     * Adds a node to the tree and Splay it to root node. 
     */
    this.add = function(key, value){

        if(this.root == null){
            this.root = new NodeDefinition(key, value);
            return;
        }

        this.root = this.splay(this.root, key);

        // In case of new node's key be lower than the root
        if(key < this.root.key){
            var node = new NodeDefinition(key, value);
            node.left = this.root.left;
            node.right = this.root;
            this.root.left = null;
            this.root = node;

        // In case of new node's key be greater than the root
        } else if(key > this.root.key){
            var node = new NodeDefinition(key, value);
            node.right = this.root.right;
            node.left = this.root;
            this.root.right = null;
            this.root = node;
        // In case of new node already exists in the tree
        } else {
            this.root.value = value;
        }
    }

    /**
     * Splay tree node removal
     * 
     * Removes a node from the tree 
     */
    this.remove = function(key) {
        if(this.root == null) {
            return;
        } 

        if(this.root.key === key){
            if(this.root.left == null) {
                this.root = this.root.right;
            } else {
                var node = this.root.right;
                this.root = this.root.left;
                this.splay(this.root, key);
                this.root.right = node;
            }
        }
    }

    /**
     * Splay tree main function.
     * 
     * Splay a node to the root of the tree. If there isn't a node with 
     * that key, the last node along the search path for the key will be splayed to 
     * the root.   
     */
    this.splay = function(node, key){

        if(node == null){
            return null;
        }

        if(key < node.key){

            // Key not found in tree
            if(node.left == null) {
                return node;
            }

            if(key < node.left.key){
                node.left.left =  this.splay(node.left.left, key);
                node = this.rotateRight(node);
            } else if(key > node.left.key) {
                node.left.right = this.splay(node.left.right, key);
                if(node.left.right != null){
                    node.left = this.rotateLeft(node.left);
                }
            } 

            if(node.left != null) {
                node = this.rotateRight(node);
            } 
    
        } else if(key > node.key){

            // Key not found in tree
            if(node.right == null) {
                return node;
            }

            if(key < node.right.key) {
                node.right.left = this.splay(node.right.left, key);
                if(node.right.left != null){
                    node.right = this.rotateRight(node.right);
                } 
            } else if (key > node.right.key) {
                node.right.right = this.splay(node.right.right, key);
                node = this.rotateLeft(node);
            }

            if(node.right != null){
                node = this.rotateLeft(node);
            }
        }

        return node;
    }


    /**
     * getSize 
     * 
     * Helper function that calculates tree size.
     */
    this.getSize  = function(){
        return this.getSubTreeSize(this.root);
    }

    /**
     * Subtree size 
     * 
     * Helper function that calculates subtree size starting
     * from a given node;
     */
    this.getSubTreeSize  = function(node){
        if(node == null) {
            return 0;
        }
        return 1 + this.getSubTreeSize(node.left) + this.getSubTreeSize(node.right);
    }

    /**
     * Rotate left 
     * 
     * Helper function that rotates node positions in counterclosewise direction 
     */
    this.rotateLeft  = function(node){

        if(node == null || node.right == null) {
            return node;
        }

        var right = node.right;
        node.right  = right.left;
        right.left = node;
        return right;
    }

    /**
     * Rotate right 
     * 
     * Helper function that rotates node positions in closewise direction 
     */
    this.rotateRight  = function(node){
        if(node == null || node.left == null) {
            return node;
        }

        var left = node.left;
        node.left  = left.right;
        left.right = node
        return left;
    }
}