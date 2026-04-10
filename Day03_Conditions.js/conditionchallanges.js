//Checking if number is greater than another number

let num1=5;
let num2=10;
console.log("I am regular upper code");

if (num1>num2) {
    console.log("num1 is greater than num2");
}else{
    console.log("Nope , num1 is not greater");
    
}

console.log("I am regular bottom code");


//Chceking if string Is equal to another string

let username = "palak";
let anotherUsername = "palak";

if (username == anotherUsername) {
    console.log("Pick another username");
}else{
    console.log("you can pick this username");
    
}


//Chceking if a variable is number or not

let score = 44;
if (typeof score === "number") {
    console.log("yep,this is a number");
}else{
    console.log("Not a number");
}

//Checking if a boolean value is true or false

let isTeaReady = false;
if (isTeaReady) {
    console.log("Tea is Ready");
}else{
    console.log("Tea is not ready");  
}

//CHceking if array is empty or not

let items = ["2","3"];
console.log(items.length);

if (items.length === 0) {
    console.log("Array is empty");
}else{
    console.log("Array is not empty");
    
}
console.log(typeof items);

