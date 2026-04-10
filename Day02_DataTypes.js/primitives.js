//Number

let Balance = 120;
let anotherBalance = new Number(180);

console.log(typeof Balance);  //number
console.log(Balance);         //120

console.log(anotherBalance.valueOf());   //180
console.log(typeof anotherBalance);    //object--nonprimitive datatype  (we are able to convert primitive into non-primitive)



//Boolean

let isActive = true;
let isfinallyActive = new Boolean(true)    //not recommended

//null and undefined

let username;
console.log(username);   //undefined means username have value but we dont know the value

//null
//console.log(firstname);   //not defined

//String

let mystring = "palak";
let myStringOne = "satija";
let username1 = "manthan";

console.log(mystring);
console.log(typeof mystring);
console.log(mystring.valueOf());

let Greeting = "hello" + " " + mystring;
console.log(Greeting);

let Message = `Helloooo ${username1} !!!!!   //iNJECT ANYTHING (sTRING iNTERPOLATION)`
console.log(Message);

let DemoOne = `Value is ${2 * 2}`
console.log(DemoOne);

//Symbol   --Guaranteed to be unique
let s1 = Symbol();
let s2 = Symbol();
console.log(s1==s2);   //gives false 
console.log(s1);










