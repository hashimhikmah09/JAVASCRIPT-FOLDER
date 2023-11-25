// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

// it should look like this:
'     ||<- Start line'//startLine.padStart(10)
'       🐢' //turtle.padStart(10);
'       🐇'//rabbit.padStart(10);

// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '='); // '🐢=======';
turtle = turtle.trim().padStart(9, '=');//'🐢======='


// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
let result = Object.entries(obj).flat().join(' ');
console.log(result);
// to this:
'my name is Rudolf the raindeer'
