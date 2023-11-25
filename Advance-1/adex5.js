// Complete the below questions using this array:
const array = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
  
  ];
  
  //Create an array using forEach that has all the usernames with a "!" to each of the usernames
  
  
  //Create an array using map that has all the usernames with a "? to each of the usernames
  
  
  //Filter the array to only include users who are on team: red
  
  
  //Find out the total score of all users using reduce

  const originalArray = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
  
  ];
  //Create an array using forEach that has all the usernames with a "!" to each of the usernames
//Advanced array
  const modifiedUsernames = [];

originalArray.forEach((user) => {
  const modifiedUsername = user.username + "!";
  modifiedUsernames.push(modifiedUsername);
});

console.log(modifiedUsernames);

//Create an array using map that has all the usernames with a "? to each of the usernames
//map
const mapArray =originalArray.map((user)=> {
    const modifiedUsername = user.username + "?";
  return modifiedUsername;
})
console.log(mapArray)

//Filter the array to only include users who are on team: red
//Filter
const redTeamUsers = originalArray.filter((user) => user.team === "red");

console.log(redTeamUsers);

 //Find out the total score of all users using reduce
//Reduce

const reduceArray = originalArray.reduce((accumulator, user) => 
{  return accumulator + user.score;
    
},0);
console.log( "Total Score:", reduceArray);

const totalScore = originalArray.reduce((accumulator, user) => accumulator + user.score, 0);

console.log("Total Score:", totalScore);
  
  // (1), what is the value of i?
  // (2), Make this map function pure:
  const arrayNum = [1, 2, 4, 5, 8, 9];
  const newArray = arrayNum.map((num, i) => {
      console.log(num, i);
      alert(num);
      return num * 2;
  })
  //solution
  (1) i = [1,2,4,5,8,9];
  (2) const arrayNum = [1, 2, 4, 5, 8, 9];
    const newArray = arrayNum.map((num, i) => {
      return num * 2;
  });
  

  
  //BONUS: create a new list with all user information, but add "!" to the end of each items they own.
  const arry = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
  
  ];
  

const newArry = arry.map(user => {
    const newItemList = user.items.map(item => item + "!");
    
    return {
        username: user.username,
        team: user.team,
        score: user.score,
        items: newItemList
    };
});

console.log(newArry);
