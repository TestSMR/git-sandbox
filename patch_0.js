function informa () {
  console.log('Vamos tos paya');
  console.log('He finisheado.');
  console.log('Has finisheado.');
  console.log('Hemos finisheado.');
  console.log('Y lo sabes...');
}

(function ( i, callback ) {
  for (var j = 1; j <= i; j++)
    {
      window.alert('Soy el número' + j);
    }
    Paya();
})(10, informa);
