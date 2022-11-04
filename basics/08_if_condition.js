(function(){
  let condition = null;
  let anotherCondition = true;
  if (condition) {
    console.log('condition true')
  } else if (anotherCondition) {
    console.log('another condition true');
  }
  else {
    console.log('condition not ture');
  }

  console.log(1 == true);
  console.log(0 == false);
}());