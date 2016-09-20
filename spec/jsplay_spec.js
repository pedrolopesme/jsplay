var JSplay = require("../jsplay");

describe("JSplay", function(){

    var tree;

    beforeEach(function(){
        tree = new JSplay();
    });

    describe("tree", function(){
        it("should calculate tree size even with no nodes",function(){
            expect(tree.size()).toEqual(0);
        });

        xit("should calculate tree size with one node", function(){
            tree.add(1, "one");
            expect(tree.size()).toEqual(1);
        });

        xit("should calculate tree size with tree nodes", function(){
            tree.add(1, "one");
            tree.add(2, "two");
            tree.add(3, "tree");
            expect(tree.size()).toEqual(3);
        });

        xit("should calculate tree size with a hundred nodes", function(){
            for(var i = 1; i <= 100; i++){
                tree.add(i, "node #" + i);
            }
            expect(tree.size()).toEqual(100);
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
    });

    describe("sorting", function(){
        xit("should run on an empty tree", function(){
        });
    });
    
});