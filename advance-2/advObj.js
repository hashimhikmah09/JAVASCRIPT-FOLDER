//reference type
[] ===[]; //false
[1] === [1]; //false

var obj1 = {value: 10};
var obj2 = obj1;
var obj3 = {value: 10}

obj1 ===obj2; //true
obj1 === obj3;//false

//context vs scope
console.log(this)
console.log(this === window)//true
this.alert("hello")

function a(){
    console.log(this)
}//return window object

 const obj4 = {
    a:function(){
        console.log(this)
    }
 }
// instantiation
class Player {
    constructor(name,type){
        this.name = name;
        this.type = type;
    }
    introduce(){
        console.log(`Hi I am $(this.name), I'm a $(this.name)`)
    }
}
class Wizard extends Player {
    constructor(name, type){
        super(name,type)
    }
    play(){
        console.log(`WEEEEEEE I'm a $(this.type)`)
    }
}

const Wizard1 = new Wizard('Shelly', 'Healer');

const Wizard2 = new Wizard('Shawn', 'Dark Magic');







