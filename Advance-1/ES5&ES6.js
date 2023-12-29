//babeljs.io read through the file and transform it to the file all browsers understand
//let + const is a new way of declaring a variable
const player = 'bobby';
let experience = 100;
let wizardLevel = false;
//anytime let is wrap around a {} it create a new scope.
if (experience > 90) {
    let wizardLevel = true;
    console.log( 'inside', wizardLevel); //true
}
console.log('outside', wizardLevel); //false

//if the let is changed to var;
//var is confusing
//const cannot be reassigned to a variable
const player1 = 'bobby';
let experience1 = 100;
var wizardLevel1 = false;

if (experience > 90) {
    var wizardLevel1 = true;
    console.log( 'inside', wizardLevel1); //true
}

console.log('outside', wizardLevel1); //true

//a function could be a constant
const a = function (){
    console.log("a")
}

// const: variables cannot be reassigned but property of the object can be changed e.g
const obj = {
    player:'bobby',
    experience: 100,
    wizardLevel:false
}
//obj.player/obj.experience/obj.wizardLevel can be changed but obj cannot.


//DESTRUCTURING
const obj1 = {
    player2:'bobby',
    experience2: 100,
    wizardLevel2:false
}
//const player2 = obj1.player2;
//const experience2 = obj1.experience2;
//let wizardLevel2 = obj1.wizardLevel2;

//with destructuring
const { player2, experience2 } = obj1;
let { wizardLevel2 } = obj1;

//object properties
const Fname = 'John Snow';
const obj2 = {
   [Fname]: 'hello',
   [1+2]: 'hihi'
}
//{3: 'hihi', John Snow: 'hello'}

const b ='Hikmah';
const c = true;
const d = {};
//if we want ppty to match the value
//const obj3 = {
  // b:b,
  // c:c,
  // d:d
//}
//with the new javascript:
const obj3 = {
    b,
    c,
    d
 }


 //Template strings
 const sName = "Sally";
 const age = 34;
 const pet = 'horse';
//const greeting = "Hello " + sName + "you seeem to be doing " + greeting + "!";
const greetingBest = `Hello ${sName} you seem to be ${age-10}. What a lovely ${pet} you have` ;

//default arguments
function greet(sName = '',age = 30, pet = 'cat'){
    return `Hello ${sName} you seem to be ${age-10}. What a lovely ${pet} you have` ;
}
//symbols are used because they create completely unique type

sym1 = Symbol();
sym2 = Symbol('foo');
sym3 = Symbol('foo');

//sym2 === sym3 is false;

//Arrow Function
function add(a,b){
    return a + b;
}

const add = (a,b) => a + b; 





















