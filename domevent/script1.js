var button = document.getElementById("enter");
var input = document.getElementById("userinput");
//to attach the li to <ul>, we grap the ul
var ul = document.querySelector("ul");

//DRY- Do not repeat yourself
function inputLength(){
    return input.value.length;
}
function createListElement(){
 //to create  another li element
 var li = document.createElement("li");
 //to attach the li to the bottom of the list
     li.appendChild(document.createTextNode(input.value));
 //append the li to the ul
     ul.appendChild(li);
     input.value = "";
}

function addListAfterClick(){
        if (inputLength() > 0){
            createListElement();  
}
}
function addListAfterKeypress(event){
        if (inputLength() > 0 && event.keycode === 13){
            createListElement();
        }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);