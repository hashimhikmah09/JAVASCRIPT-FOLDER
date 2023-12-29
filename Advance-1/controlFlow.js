/***tenary operator
*conditon ? expr1 : expr2;
*if condition is true return expresion 1
*if the condition is false return expression 2
***/
 function isUserValid(bool){
    return bool;
 }
 var answer = isUserValid(true) ? "You may enter": "Access Denied";
 var password = "Your password is " + (isUserValid(false) ? 1234: "not available");

 function condition(){
    if (isUserValid(true)){
        return "You may enter";
    }
    else{
        return "Access Denied";
    }
 }
 var ans2 = condition();

 //switch statement
 function moveCommand(direction){
    var whatHappens;
    switch(direction){
        case"forward":
            whatHappens ="you encounter a monster";
            break
        case"back":
            whatHappens ="you arrived home";
            break
        case"right":
            whatHappens ="you found a river";
            break
        case"left":
            whatHappens ="you run into a troll";
            break
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
 }