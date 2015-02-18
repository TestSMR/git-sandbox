function informa () {
  console.log('Vamos tos paya');
  console.log('He finisheado.');
  console.log('Has finisheado.');
  console.log('Hemos finisheado.');
  console.log('Y lo sabes...');
}

function Tree ( name ) {
  this.name = name || 'Default';
  this.branches = 2;
}

Tree.prototype.setName = function ( name ) {
  this.name = name;
}

var treebol = new Tree('Treebol');

function sumUp ( n1, n2 ) {
  return n1 + n2;
}

function subUp ( n1 , n2 ) {
  return n1 - n2;
}

(function ( i, callback ) {
  for (var j = 1; j <= i; j++)
    {
      window.alert('Soy el número' + j);
    }
    Paya();
})(10, informa);
