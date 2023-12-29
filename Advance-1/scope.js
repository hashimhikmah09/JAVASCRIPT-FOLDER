//scope
//scope means variable access
//by default we are in the root scope
function aa(){
    console.log("test");
}

function bb(){
    var a = "hello";
}
console.log(a); //display reference error because the scope 'a' is inside the function bb()

// for function bb() to work we do:

function bb(){
    var a = "hello"
    console.log(a)
}

//when bb() is called in the console,it returns hello
//function have access to any variable in the root scope
var b = "can I access this";
function bb(){
    var a = "hello"
    console.log(b) 
}
//function bb() returns Can I access this?

var b = "can I access this";
function bb(){
     b = "hello";
    
}
//console.log(b) returns Can I access this?
//console.log(b) returns hello
//bb() returns undefined

//ROOT SCOPE(window)
var fun =5;

function funFunction() {
 //child scope
 var fun = "hellooo";
 console.log(1, fun);
}

function funerFunction() {
    //child scope
    var fun ="Bye";
    console.log(2, fun);
   }

function funestFunction() {
    //child scope
     fun ="AHHHHH";
    console.log(3, fun);
   }
console.log("window", fun); //5
funFunction(); //helloo
funerFunction(); //Bye
funestFunction(); //AHHHHH

//console.log(fun) returns AHHHHH because fun has been modified
//funFunction and funerFunction wont have access to the root scope because the child and parent scope look the same
//this is called a naming complex
