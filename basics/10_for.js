(function(){
  // for (let i = 0; i < 5; i++) {
  //   for (let j = 0; j < 2; j++) {
  //     console.log(j);
  //     console.log(i);
  //     if (i == 1) {
  //       break;
  //     }
  //   }
  //   console.log('outer loop');
  //   console.log(i);
  // }

  // for (let i = 0;  i < 5; i++) {
  //   if (i == 2) {
  //     break;
  //   }
  //   console.log(i);
  // }

  for (let i = 0;  i < 5; i++) {
    if (i == 2) {
      continue;
    }
    console.log(i);
  }
}());