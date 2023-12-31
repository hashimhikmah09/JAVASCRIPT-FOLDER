//Closure: What does the last line return?
const addTo = x => y => x + y;
var addToTen = addTo(10)
addToTen(3)
//solution
13
//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1)
//solution
31

//Currying: What does the last line return?
const sum1 = (a, b) => a + b
const curriedSum1 = (a) => (b) => a + b
const add6 = curriedSum(5)
add5(12)
//solution
17

//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10)
//solution
 //a=10
// g=10+5 =15
 //f= 15+1 =16
 //answer = ((10 + 5) + 1) = 16

//What are the two elements of a pure function?
//Avoiding side effects
//functional purity