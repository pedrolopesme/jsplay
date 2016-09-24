var JSplay = require("../jsplay");

describe("JSplay", function(){

    var tree;

    beforeEach(function(){
        tree = new JSplay();
    });

    describe("tree", function(){

        it("should allow add one node", function(){
            tree.add(1, "one");
            var val = tree.get(1);
            expect(val).not.toBeNull();
            expect(val).toEqual("one");
        });

        it("should calculate tree size even with no nodes",function(){
            expect(tree.getSize()).toEqual(0);
        });

        xit("should calculate tree size with one node", function(){
            tree.add(1, "one");
            expect(tree.getSize()).toEqual(1);
        });

        xit("should calculate tree size with tree nodes", function(){
            tree.add(1, "one");
            tree.add(2, "two");
            tree.add(3, "tree");
            expect(tree.getSize()).toEqual(3);
        });

        xit("should calculate tree size with a hundred nodes", function(){
            for(var i = 1; i <= 100; i++){
                tree.add(i, "node #" + i);
            }
            expect(tree.getSize()).toEqual(100);
        });

        xit("check if a node exists in the tree",function(){
            expect(tree.getSize()).toEqual(0);
        });

        xit("should calculate a node height on a tree with no nodes",function(){
            tree.add(1, "one");
            var node = tree.get(1);
            expect(node.heigth).toEqual(0);
        });

        xit("should splay the last node to the root and update its height",function(){
            tree.add(3, "tree");
            tree.add(2, "two");
            tree.add(1, "one");
            var node = tree.get(3);
            expect(node.heigth).toEqual(0); 
        });

        xit("should rotate nodes to right",function(){
        });

        xit("should rotate nodes to left",function(){ 
        });

        xit("should update node's height after updates",function(){ 
        });

        xit("should remote a node",function(){ 
        });
    });

    describe("splay", function(){
        xit("should run on empty tree",function(){ 
        });
    });

    describe("sorting", function(){
        xit("should run on an empty tree", function(){
        });
    });
    
});