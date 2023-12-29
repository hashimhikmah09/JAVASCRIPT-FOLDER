const array = [1,2,10,16];
const double = [];
const newArray = array.forEach((num)=> {
    double.push(num * 2);
})
console.log(double);
//map, filter, reduce
const mapArray = array.map((num)=>{
    return num * 2;
})
console.log(mapArray);

//filter
 const filterArray = array.filter((num)=>  num > 5);
 console.log(filterArray);

 //reduce is really powerful
 //we can do filter and map with reduce
 //in reduce we have a second parameter i.e.what we want accumulator to start with;
const reduceArray = array.reduce((accumulator,num) =>{
    return accumulator + num
}, 0)