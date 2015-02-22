function Tree ( name ) {
  this.name = name || 'Default';
  this.branches = 2;
}

Tree.prototype.setName = function ( name ) {
  this.name = name;
};

var treebol = new Tree('Treebol');
var treebal = new Tree('Treebal');

function sumUp ( n1, n2 ) {
  return n1 + n2;
}

function subUp ( n1 , n2 ) {
  return n1 - n2;
}
