const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000
}

//1
for (let i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}

//2
basket.forEach(item => {
  console.log(item);
})
//for in
for (item in detailedBasket) {
  console.log(item);
}
//for of
for (item of basket) {
  console.log(item);
}

// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [-1,0,3,100, 99, 2, 99] // should return 100
const array2 = ['a', 3, 4, 2] // should return 4
const array3 = [] // should return 0


  //for loop

const array = [-1,0,3,100, 99, 2, 99] // should return 100
function biggestNumberInArray(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
  console.log(biggestNumberInArray(array)); //100

  //while loop
  const array2 = ['a', 3, 4, 2] // should return 4
    function biggestNumberInArray2(arr) {
    let max = undefined; // the array may contain non-numeric values
  
    let i = 0;
    while (i < arr.length) {
      if (typeof arr[i] === 'number' && (max === undefined || arr[i] > max)) {
        max = arr[i];
      }
      i++;
    }
  
    return max;
  }
  
  console.log(biggestNumberInArray2(array2)); // return 4
      

//forEach loop
const array3 = [] // should return 0
function biggestNumberInArray3(arr) {
    let max = undefined; // Assuming the array may contain non-numeric values
  
    for (let index in arr) {
      const item = arr[index];
      if (typeof item === 'number' && (max === undefined || item > max)) {
        max = item;
      }
    }
  
    return max;
  }
  
  console.log(biggestNumberInArray3(array3)); //  return undefined 
// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100
}

function checkBasket(basket, lookingFor) {
    if (basket[lookingFor] !== undefined && basket[lookingFor] > 0) {
      return `${lookingFor} is in the basket.`;
    } else {
      return `${lookingFor} is not in the basket.`;
    }
  }
  
  
  console.log(checkBasket(amazonBasket, 'glasses')); //  return "glasses is in the basket."
  console.log(checkBasket(amazonBasket, 'shoes'));   //  return "shoes is not in the basket."
  