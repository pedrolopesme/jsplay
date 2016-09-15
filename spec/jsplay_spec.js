var jsplay = require("../jsplay");

describe("JSplay", function(){

    describe("sorting", function(){
        it("should run on empty array", function(){
            expect(jsplay.splay([])).toEqual([]);
        })
    });
    
});