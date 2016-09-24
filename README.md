<h1 align="center">
  <br>
  <img src="https://cdn2.iconfinder.com/data/icons/flat-jewels-icon-set/512/0002_Tree.png" alt="JSplay" width="200">
  <br>
  JSplay
  <br>
  <br>
</h1>

<h4 align="center">A NodeJS implementation of Splay Tree binary search algorithm.</h4>

<p align="center">
  <a href="https://travis-ci.org/pedrolopesme/jsplay"><img src="https://api.travis-ci.org/pedrolopesme/jsplay.png?branch=master" alt="Travis Builds"></a>
</p>
<br>

### Features

**JSplay** is the classic splay tree search algorithm written completely in JavaScript, compatible with NodeJs applications 
and browsers. Yep, that's right. Browsers. 

A splay tree is a self-adjusting binary search tree with the additional property that recently accessed elements are quick to access again. It performs basic operations such as insertion, look-up and removal in O(log n) amortized time. For many sequences of non-random operations, splay trees perform better than other search trees, even when the specific pattern of the sequence is unknown. The splay tree was invented by Daniel Sleator and Robert Tarjan in 1985.

All normal operations on a binary search tree are combined with one basic operation, called splaying. Splaying the tree for a certain element rearranges the tree so that the element is placed at the root of the tree. One way to do this is to first perform a standard binary tree search for the element in question, and then use tree rotations in a specific fashion to bring the element to the top. Alternatively, a top-down algorithm can combine the search and the tree reorganization into a single phase.

More info on [Wikipedia](https://en.wikipedia.org/wiki/Splay_tree).  

### Operations

Regardless of the presence of the associated key prior to that operation, this splay tree implementation splays on every operation. If there isn't a node with 
that key, the last node along the search path for the key will be splayed to the root.     

#### Insertion

In order to insert a new node into the tree, you need to supply it's Key and Value. You're free to use a key with any type,
but it's extremely recommended to use integer keys in order to preserve fast key comparison between nodes. The new node will be splayed to the root of the tree.

```javascript
var JSplay = require("jsplay");

var tree = new JSplay();

// add method take two params: KEY (any type, preferably int), VALUE (any type)
tree.add(1, "one");
tree.add(2, 2);
tree.add(3, { "val" : "tree" });
tree.add(1, "one - updated"); // Updates node with key 1 to  "one - updated"
```

#### Contains

Check if the tree contains a given node by its key.

```javascript
var JSplay = require("jsplay");

var tree = new JSplay();
tree.add(1, "one");
tree.contains(1); // true
tree.contains(2); // false
```

#### Get

Search for a node by its key and return it's value.

```javascript
var JSplay = require("jsplay");

var tree = new JSplay();
tree.add(1, "one");
tree.add(2, { "val" : 2 });

tree.get(1); // returns "one"
tree.get(2); // returns { "val" : 2 }
tree.get(3); // returns null
```

#### Remove

Removes a node from the tree.

```javascript
var JSplay = require("jsplay");

var tree = new JSplay();
tree.add(1, "one");
tree.add(2, { "val" : 2 });

tree.remove(1);
tree.contains(1); // returns false
```


### Building module

Just run:

`$ npm install`

### Compressing source

Just run:

`$ make compress`

### Running tests

Tests were write using [Jasmine](http://jasmine.github.io/). In order to run them, just type:

`$ npm test` 

### Build and Running Docker Image

To build a docker image, you should just simply type: 

`$ docker build -t pedrolopesme/jsplay .` 

In order to run it, simply do: 

`$ docker run pedrolopesme/jsplay` 

### Credits

JSplay logo was created by [PixelKit](http://www.pixelkit.com/), released under [Creative Commons Attribution 3.0 Unported (CC BY 3.0)](http://creativecommons.org/licenses/by/3.0/) license.

### License

MIT. Copyright (c) [Pedro Mendes](http://pedromendes.com.br). 