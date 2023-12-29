const first = () =>{
    const greet = 'Hi';
    const second = () => {
        alert(greet)
    }
    return second;
}
const newFunc = first();
newFunc()
//Closures- a function ran.The function executed. It's never going to execute again.
//BUT Itis going to remember that there are references to those variables
//so the child scope always have access to the parent scope.
//parent scope do not have acess to the child scope.

//CURRYING means converting a function that take multiple argument into a funx that takes one parameter at a time
const Multiply = (a,b) => a * b;
const curriedMultiply = (a) =>(b) => a * b; 
curriedMultiply(3)(4) //12
const multiplyBy5 = curriedMultiply(5);
multiplyBy5(5) //25

//COMPOSE
const compose = (f,g) => (a) =>f(g(a)) //f &g are funxs

const sum = (num)=> num + 1;
compose(sum,sum)(5); //7

//Avoiding side effects
//functional purity
//by avoiding side effect and functional purity we create DETERMINISTIC 
