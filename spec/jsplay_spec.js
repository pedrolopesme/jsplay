var JSplay = require("../jsplay");

describe("JSplay", function(){

    var tree;

    beforeEach(function(){
        tree = new JSplay();
    });

    describe("tree", function(){

        it("should return null when trying to get a nonexistent node", function(){
            tree.add(1, "one");
            var val = tree.get(10);
            expect(val).toBeNull();
        });

        it("should allow to add one node", function(){
            tree.add(1, "one");
            var val = tree.get(1);
            expect(val).not.toBeNull();
            expect(val).toEqual("one");
        });

        it("should allow to add two nodes", function(){
            tree.add(1, "one");
            tree.add(2, "two");
            var val1 = tree.get(1);
            var val2 = tree.get(2);
            expect(val1).not.toBeNull();
            expect(val2).not.toBeNull();
            expect(val1).toEqual("one");
            expect(val2).toEqual("two");
        });

        it("should calculate tree size even with no nodes",function(){
            expect(tree.getSize()).toEqual(0);
        });

        it("should calculate tree size with one node", function(){
            tree.add(1, "one");
            expect(tree.getSize()).toEqual(1);
        });

        it("should calculate tree size with tree nodes", function(){
            tree.add(1, "one");
            tree.add(2, "two");
            tree.add(3, "tree");
            expect(tree.getSize()).toEqual(3);
        });

        it("should calculate tree size with a hundred nodes", function(){
            for(var i = 1; i <= 100; i++){
                tree.add(i, "node #" + i);
            }
            expect(tree.getSize()).toEqual(100);
        });

        it("should fail properly when there is an attempt to rotate empty nodes",function(){
            expect(tree.rotateLeft(null)).toBeNull();
            expect(tree.rotateRight(null)).toBeNull();
        });

        it("shouldn't rotate nodes to left when there is only one node",function(){
            tree.add(1, "one");
            var node = tree.rotateLeft(tree.root);
            expect(node.left).toBeNull();
            expect(node.right).toBeNull();
        });

        it("shouldn't rotate nodes to left when there isn't nodes in right side",function(){
            tree.add(1, "one");
            tree.add(2, "two");
            var node = tree.rotateLeft(tree.root);
            expect(node.key).toEqual(tree.root.key);
            expect(node.left.key).toEqual(1);
            expect(node.right).toBeNull();
        });

        it("should rotate nodes to left",function(){
            tree.add(3, "three");
            tree.add(1, "one");
            tree.add(2, "two");
            var node = tree.rotateLeft(tree.root);
            expect(node.key).toEqual(3);
            expect(node.right).toBeNull();
            expect(node.left.key).toEqual(2);
            expect(node.left.left.key).toEqual(1);
        });


        it("shouldn't rotate nodes to right when there is only one node",function(){
             tree.add(1, "one");
             var node = tree.rotateRight(tree.root);
             expect(node.left).toBeNull();
             expect(node.right).toBeNull();
        });

        it("shouldn't rotate nodes to right when there isn't nodes in left side",function(){
            tree.add(2, "two");
            tree.add(1, "one");
            var node = tree.rotateRight(tree.root);
            expect(node.key).toEqual(tree.root.key);
            expect(node.right.key).toEqual(2);
            expect(node.left).toBeNull();
        });

        it("should rotate nodes to right",function(){
            tree.add(3, "three");
            tree.add(1, "one");
            tree.add(2, "two");

            var node = tree.rotateRight(tree.root);
            expect(node.key).toEqual(1);
            expect(node.left).toBeNull();
            expect(node.right.key).toEqual(2);
            expect(node.right.right.key).toEqual(3);
        });

        it("should remove a node",function(){
            tree.add(1, "one");
            expect(tree.get(1)).toEqual("one");
            tree.remove(1);
            expect(tree.get(1)).toBeNull();
        });

        it("should behave properly when there is an attempt to remove a nonexistent node",function(){
            tree.add(1, "one");
            expect(tree.get(1)).toEqual("one");
            tree.remove(2);
            expect(tree.get(1)).toEqual("one");
        });
    });

    describe("splay", function(){

        it("should run on empty tree",function(){ 
            expect(tree.splay(null, null)).toBeNull();
        });

        it("should run on tree with only one node",function(){
            tree.add(1, "one");
            expect(tree.splay(tree.root, 1).key).toEqual(1); 
        }); 

        it("should run on tree with only left side leafs",function(){
            tree.add(1, "one");
            tree.add(2, "two");
            tree.add(3, "three");
            var node = tree.splay(tree.root, 1);
            expect(node.key).toEqual(1);
            expect(node.left).toBeNull();
            expect(node.right.key).toEqual(2);
            expect(node.right.right.key).toEqual(3);
        }); 

        it("should run on tree with only right side leafs",function(){
            tree.add(3, "three");
            tree.add(2, "two");
            tree.add(1, "one");
            
            var node = tree.splay(tree.root, 3);
            expect(node.key).toEqual(3);
            expect(node.right).toBeNull();
            expect(node.left.key).toEqual(2);
            expect(node.left.left.key).toEqual(1);
        });


        it("should run on a very unbalanced tree",function(){
            for(var i = 1; i <= 1000; i++){
                tree.add(i, "node #" + i);
            }

            var node = tree.splay(tree.root, 1000);
            expect(node.key).toEqual(1000);
            expect(tree.getSubTreeSize(node)).toEqual(1000);
        });
    });

    describe("searching", function(){
        it("should run on an empty tree", function(){
            expect(tree.get(1)).toBeNull();
        });

        it("should check if a node exists ",function(){
            tree.add(1, "one");
            expect(tree.contains(1)).toBeTruthy();
        });

        it("should check if a node exists even when it doens't exist",function(){
            tree.add(1, "one");
            expect(tree.contains(2)).toBeFalsy();
        });

        it("should splay a given node to the root after search it", function(){
            tree.add(1, "one");
            tree.add(2, "two");
            tree.add(3, "three");
            expect(tree.root.key).toEqual(3);
            tree.get(1);
            expect(tree.root.key).toEqual(1);
        });

        it("should splay the last node along the search path after a search call even if the key doens't exist", function(){
            tree.add(1, "one");
            tree.add(2, "two");
            tree.add(3, "three");
            expect(tree.root.key).toEqual(3);
            tree.get(0);
            expect(tree.root.key).toEqual(1);
        });

    });
    
});