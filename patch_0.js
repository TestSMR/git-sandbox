function informa () {
  console.log('Vamos tos paya');
}

(function ( i, callback ) {
  for (var j = 1; j <= i; j++)
    {
      window.alert('Soy el número' + j);
    }
    Paya();
})(10, informa);
