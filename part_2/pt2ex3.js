// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.


// 2. Create an array which contains the object you have made above and name the array "database".

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".


var database = [
    {
      username:"andrei",
        password:"supersecret"
    },
    {
        username:"sally",
          password:"123"
      },
      {
        username:"ingrid",
          password:"777"
      }
];

var newsFeed = [
    {
        username:"Bobby",
        timeline:"so tired from all that learning"  
    },
    {
        username:"Sally",
        timeline:"Javascript is soooo cool"
    },
    {
        username:"hikmah",
        timeline:"I need to learn fast"
    }
];



var userNamePrompt = prompt("What\'s your username?");
var passwordPrompt = prompt("what\'s your password?");

function isUserValid(username, password){
 for(var i =0; i < database.length; i++ ){
    if (username === database[i].username && password === database[i].password){
        return true;
    
    }
 }

 return false;
}

function signIn(username, password){
    if (isUserValid(username, password)){
        console.log(newsFeed);
    }

else {
alert("sorry, wrong username and password");
}
}

signIn(userNamePrompt, passwordPrompt);
