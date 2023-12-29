//prmitive type are immutable
//pass by value simply means to copy the value and create that value somewhere else in the memory

var a = 4;
var b = a;

b++;
console.log(a); //4
console.log(b); //5

//object in javascript are stored in memory and are passed by reference

let obj1 = {name:'Yao', password: '123' }
let obj2 = obj1

obj2.password = 'easypeasy';
console.log(obj1); //{ name: 'Yao', password: 'easypeasy' }
console.log(obj2); //{ name: 'Yao', password: 'easypeasy' }



var c = [1,2,3,4,5];
var d = c;
d.push(183854)
console.log(d); //[ 1, 2, 3, 4, 5, 183854 ]
console.log(c); //[ 1, 2, 3, 4, 5, 183854 ]

var c = [1,2,3,4,5];
var d = [].concat(c);
d.push(183854)
console.log(d); //[ 1, 2, 3, 4, 5, 183854 ]
console.log(c); //[1,2,3,4,5];

//let obj = { a:'a', b: 'b', c: 'c'}
//let clone = Object.assign({}, obj);
//let clone2 = {...obj}

obj.c = 5
//console.log(obj) //{ a: 'a', b: 'b', c: '5' }
//console.log(clone2) //{ a: 'a', b: 'b', c: 'c' }
//console.log(clone) //{ a: 'a', b: 'b', c: 'c' }


//shallow cloning
let obj4 = { a:'a', 
             b: 'b', 
             c: {deep:'try and copy me'}
            }
let clone1 = Object.assign({}, obj4);
let clone3 = {...obj4};
obj4.c = 5
console.log(obj4)
console.log(clone1)
console.log(clone3)