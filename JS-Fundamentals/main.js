//Function declaration
function mul(x,y){
    return x*y;
}

var a=5;
var b=3;
//function invocation
var ans=mul(a,b);
console.log(ans);

//function expression
var showMessage = function(){
    console.log("Hi");
}
console.log(showMessage);
showMessage();

// z(); //---results in error
var z=function(){
    console.log("Hey!");
}
z();