function informa () {
  console.log('Vamos tos paya');
  console.log('He finisheado.');
  console.log('Has finisheado.');
}

function sumUp ( n1, n2 ) {
  return n1 + n2;
}

(function ( i, callback ) {
  for (var j = 1; j <= i; j++)
    {
      window.alert('Soy el número' + j);
    }
    Paya();
})(10, informa);
