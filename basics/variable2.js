(function(){
  var x = null;
  var y;
  console.log(x);
  console.log(typeof x);

  console.log(y);
  console.log(typeof y);

  console.log(x == y); // check value
  console.log(x === y); // check both value and type

  var z = NaN;
  console.log(z);
  console.log(typeof z);
}());