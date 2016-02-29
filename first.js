var Car=function(Name){
  
  this.Name=Name;
  
  console.log('constructor');
}

Car.prototype.move=function (){
  
  console.log(this.Name+'Car is moving now');
}

var c1=new Car('BMW');
var c2=new Car('Porsi');
 var hellofunction=c1.move;
 console.log(hellofunction===c1.move);

//console.log('First car '+c1.Name+ ' created');
//console.log('Second car '+c2.Name+ ' created');
//hellofunction();
/// hellofunction.call(c1);
//c1.move();
//c2.move();
/*
Exception: ReferenceError: hellosunction is not defined
@Scratchpad/1:19:2
*/
/*
Exception: TypeError: hellofunction is not a function
@Scratchpad/1:19:1
*/