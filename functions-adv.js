/* JAVASCRIPT FUNCTIONS - ADVANCED */

// Function - reusable block of code intended to perform an action. 

// Function Declaration 
/*
function sumNumbers(num1, num2){
    return console.log(num1 + num2);
}
*/

// Function Expression
// Anonymous Function : is a function without a given name. 
/*
const sumNumbers = function(num1, num2){
    return console.log(num1 + num2);
}
*/

// Arrow Functions 
/*
const sumNumbers = (num1, num2) =>{
    return console.log(num1 + num2);
}
*/

// Function Invocation
//sumNumbers(2,2);


/* ROUTINE EXERCISE */

function wakeUp(){
    return console.log("I'm waking up!");
}

const drinkCoffee = function(){
    return console.log("Chilling and drinking my coffee");
}

const goToIronhack = () =>{
    return console.log("Going to Ironhack");
}

function routine(func1, func2, func3){
    func1();
    func2();
    func3();
}

routine(wakeUp, drinkCoffee, goToIronhack);





