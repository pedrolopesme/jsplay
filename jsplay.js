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
     * Check if the tree contains a given node by its key. 
     */
    this.contains = function(key){
        return this.get(key) != null;
    }

    /**
     * Returns a node.
     * 
     * Search for a node by its key 
     */
    this.get = function(key){
        root = this.splay(root, key);
        if(root.key === key){
            return root;
        }
        return null;
    }

    /**
     * Splay tree insertion.
     * 
     * Adds a node to the tree and Splay it to root node. 
     */
    this.add = function(key, value){
        if(root == null){
            root = new NodeDefinition(key, value);
            return;
        }

        root = this.splay(root, key);

        // In case of new node's key be lower than the root
        if(key < root.key){
            var node = new NodeDefinition(key, value);
            node.left = root.left;
            node.right = root;
            root.left = null;
            root = node;

        // In case of new node's key be greater than the root
        } else if(key > root.key){
            var node = new NodeDefinition(key, value);
            node.right = root.right;
            node.left = root;
            root.right = null;
            root = node;

        // In case of new node already exists in the tree
        } else {
            root.value = value;
        }

        this.updateHeight(root);
    }

    /**
     * Splay tree node removal.
     * 
     * Removes a node to the tree 
     */
    this.remove = function(key) {
        if(root == null) {
            return;
        } 

        root = splay(root, key);

        if(root.key === key){
            if(root.left == null) {
                root = root.right;
            } else {
                var node = root.right;
                root = root.left;
                splay(root, key);
                root.right = node;
            }
            this.updateHeight(root);
        }
    }

    /**
     * Splay tree main function.
     * 
     * Splay a node to the root of the tree. If there isn't a node with 
     * that key, the last node along the search path for the key is splay to 
     * the root.   
     */
    this.splay = function(node, key){
        if(node == null){
            return null;
        }

        if(key < node.key){

            // Key not found in tree
            if(node.left == null) {
                return this.updateHeight(node);
            }

            if(key < node.left.key){
                node.left.left =  splay(node.left.left, key);
                node = this.rotateRight(node);
            } else if(key > node.left.key) {
                node.left.right = splay(node.left.right, key);
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
                return this.updateHeight(node);
            }

            if(key < node.right.key) {
                node.right.left = splay(node.right.left, key);
                if(node.right.left != null){
                    node.right = this.rotateRight(node.right);
                } 
            } else if (key > node.right.key) {
                node.right.right = splay(node.right.right, key);
                node = this.rotateLeft(node);
            }

            if(node.right != null){
                node = this.rotateLeft(node);
            }
        }

        return this.updateHeight(node);
    }

    /**
     * Update height
     * 
     * Helper function that update a node's height
     */
    this.updateHeight = function(node){
        if(node != null) {
            if(node.left == null && node.right == null) { 
                node.height = 1;
            } else if(node.left == null){
                node.height = 1 + node.right.height; 
            }else if(node.right == null){
                node.height = 1 + node.left.height; 
            } else {
                node.height = 1 + Math.max(node.left.height, node.right.height);
            }
        }
        return node;
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
        if(node == null) {
            return;
        }

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
    this.rotateLeft  = function(node){
        if(node == null) {
            return;
        }

        var left = node.right;
        node.right  = left.left;
        node.left = node;
        return left;
    }

}