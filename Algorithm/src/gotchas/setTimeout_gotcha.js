// Loop variable on setTimeout will be in global scope, So you will see five 5.
// add closure around console.log function, it will display i correctly
//=> 5  5  5  5  5
for (var i = 0; i < 5; i++) {  
    setTimeout(function() {
       console.log(i); 
    }, i * 1000);
}
//=> 0 1 2 3 4
for (var i = 0; i < 5; i++) {  
  (function(n) {
    setTimeout(function(){ 
      console.log(n);
    }, n * 1000);
  })(i);
}
//=> 0 1 2 3 4
[0,1,2,3,4].forEach(function(n) {
  setTimeout(function(){ console.log(n); }, n * 1000);
});
//=> 0 1 2 3 4
for (var i = 0; i < 5; i++) {  
    setTimeout(function(n){ 
      console.log(n); 
    }.bind(null, i)
    , i * 1000);
}
//=> 0 1 2 3 4
for (var i = 0; i < 5; i++) {
  setTimeout(()=>console.log(i), i*1000);
}


