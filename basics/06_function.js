(function(){
  function getText() {
    console.log("Hello world");
  }
  var anotherFn = getText;
  anotherFn();
  console.log(typeof anotherFn);
}());