console.log("Hello Gemini");

// variables
// Variables are name used to store data in Js
// Variable declarators var, let, const
// Creating Variable
// Declarator Varname = Value
// Variable names must niot start with number and any other characters execpt A-Za-z $ and _
// In JS we use camelCase method of naming convention
var day = "Monday";
console.log(day);
let myAge = 16;
console.log(myAge);
const isMarried = false;
const _date = "23/02/2024";
let $atmPin = 3698;
console.log(isMarried, _date,  $atmPin);
//let .region = true; Wrong way of creating variable 

// Differences between var, let and const
//  Var can be re-declared and reassigned
var bmi = 23.8;
console.log(bmi)

// redeclaring
var bmi = 22.5;
console.log(bmi);


// Reassigning
     bmi = 21.7;
     console.log(bmi);


// let 
// let can not  be re-declared but can be reassigned
let middleName = "Gemini"
console.log(middleName);
// redeclaring
//let middleName = "Olaayo" 

//reassigning
   middleName = "Olaayo"
console.log(middleName);

// const 
//const doesn't alllow for redeclaration or reassignment
//let isMarried = true;
// isMarried = true;

// Date Types in JS
// - string
// - number
// - booleans
// - null/undefined
// - Arrays
// - objects
// - BigInt
// - Symbol

// STRINGS
// Strings are text/data stored in either single or double quotes.

const str1 = 'This is string with single quotes'
console.log(str1)

const str2 = "This is string with double quotes"
console.log(typeof(str1,str2))
console.log(str2)

// Numbers

const gravity = 9.8
const x ="55"
console.log(gravity, typeof gravity);

console.log(bmi + gravity);
console.log(gravity + x);
console.log(x/gravity);
console.log(str1/gravity);   // Nan


// Boolean true/false
console.log(isMarried);
const isLoggedIn = true;
if (isLoggedIn){
    console.log("Welcome to my world");
}

//null/ undefiend 
let food
console.log(food);
    food = null;
    console.log(food);

// Array
// Array is a collection of items enclsoed in a square bracket.
const arr = ["keyboard", 10, false, null, [1, 3, 4]];
console.log(arr);

const fruits = ["orange", "mango", "apple", "grapes", "pineapple"];
console.log(fruits);

// object
// object is a data structure that stores date in key-value pairs. e.g. key1-value1
const myObj = {
    carbohydrate: "Garri",
    protein: "beef",
    farAndOil: "Butter",
    vitamin: "Orange",
    water: "watermelon",
    minerals: "Sea food"
}

const gemini = {
    firstName: "Marvellous",
    lastName: "Otitolaye",
    age: 19,
    gender: "Female",
    isMarried: true,
    skills: ['Trading'],
    occupation:"ForexTrader",
    address: {
        city: "Ikeja",
        state: "Lagos",
    },
    favoriteFood: "Pounded yam",
    favoriteSport: "Tennis"
}
console.log(gemini.city);

// Assignment
// From the object above, print to the console the following:
// fullName = "John Doe"
// Top skill = "Javascript"
// cityOfResidence = "Ikorodu"


const assignment = {
    fullName:{
        firstName: "Marvellous",
        lastName: "Otitolaye",
    },
    topSkill: "Javascript",
    
    cityOfResidence:{
        city: "Ikorodu"
    }
}
console.log(assignment)

// correction
const fName = gemini.firstName
const lName = gemini.lastName
const topSkill = gemini.skills [0]
const fullName =  fName + " " + lName
console.log("Full Name:", fullName);
console.log("My top skill is ", topSkill);
console.log("My city of residence",  gemini.address.city);

// String properties and methods
// properties - length, index
// string methods-toUpppercase, toLowerCase, concat, split, slice, trim, replace, substring. etc...

const sch = "Techstudio academy"
const str3 = "My name is "
const fullStatement = "";

// lemgth 
const strLen = sch.length
console.log(strLen);

// index and indexOf
console.log("index of the character is", sch.indexOf("m"));

console.log("Character at index 7 is", sch[7]);

// toUpperCase/toLowerCase

console.log(sch.toLowerCase());
console.log(sch.toUpperCase());

// concatenation of strings
// concat 
const concatString1 = str3.concat(fullName);
console.log (concatString1);
const concatString2 = str3 + fullName
console.log(concatString2);

// Template literals
const tem =`Hi there!, ${str3} ${fullName}, i am ${myAge} years old`
console.log(tem);

// split
console.log(sch.split("s"));
console.log(tem.split(","));

// slice (start, end) 0, 1,2, etc..
console.log(tem.slice(0, 35));
const slicedword = `${tem.slice(0, 30)}...more`
console.log(slicedword)

const substring= "{(0, 30)...}"
console.log(substring);

// Operators
// -Arithmetic operator
// -Assignment operator
// -Comparison operator
// -Logical operator

// Arithmetic Operators +, -, *, **, /, %, ++, --
let y = 20;
let z = -10;
console.log(x, typeof x);
let agg = Number (x) + y - z;
console.log(agg);

// 20 % 3 == 6r2
// 10 % 6 == 4
// 25 % 4 == 1
// 40 % 2 == 0 
// 5 % 2 == 1


// Assignment operator = 
// Assignment operators are used to assign values to variables. 

const mySiblings = ["Victoria", "King", "Peace", "Rejoice"]
console.log(mySiblings)

// Logical operators &&, ||, !
const T = true
const F = false
const isAdult = true

// || (Logical and)
console.log (T && T); //true
console.log (T && F); //false
console.log (F && T); //false
console.log (F && F); //false

// || (logical or)
console.log (T || T); //true
console.log (T || F); //true
console.log (F || T); //true
console.log (F || F); //false


console.log(myAge); 
console.log(myAge >= 18)

// &&
if (myAge >= 18 && isAdult){
    console.log("You can take alcohol");
} 

let pwd = "mypassword123";
if (pwd.lenght >11 && pwd.includes("#")){
    console.log("strong password");
}else{
    console.log("Your password is not strong enough|");
}


// comparison operator ==, ===, !=, !==

//Math methods: floor, ceil, random, min,max
// Math floor
//Math.floor() returns only the whole number part of a decimal (not rounding up/down)
let num1 = 9.64577
Math.floor(num1)
console.log(Math.floor(num1));

// ceil
// math.ceil() this round up to the nearest whole number redardless of the decimal parts.
console.log(Math.ceil(num1)); // 10

// random
// Math.random() is used to generate random numbers

console.log(Math.random() * 1000000)
const ranNum = Math.random() * 1000000
const OTP = Math.floor(ranNum)
console.log(`Enter your secret code ${OTP} to continue`);

const d = Math.random() * 6
console.log(d);
const dice = Math.ceil(d);
console.log(dice);

//conditionals if, if-else, else-if-else, switch, ternary operator

// if
// if(booolean condition){
// run this codes
//}

// if-else
if(isMarried){
    console.log("Hello Mrs");
}else{
    console.log("Hello Miss");
}

// else-if-else
let pass = "sample12323A#@"
if(isLoggedIn && pass.length < 8 && pass.includes("2")){
    console.log("Weak password")
}else if(isLoggedIn && pass.length > 8 && pass.length <=10 && pass.includes("A") && !pass.inclused("#"))
{
    console.log("Moderately Strong Password");
}else if(isLoggedIn && pass.lenght > 10 && pass.includes("#") || pass.includes("@")){
    console.log("Very strong password");
}else{
    console.log("No Match");
}

// Task 5
// Create a variables called acctBal, atmPin. Using simple conditional statements, write a code that logs the following:
// a) if user is authenticated, and atnPin is correct, it should log the message "Transaction successful! Your account balance is ----"
// b) if user is not authenticated or incorrect atmPin, it should log the message "Transaction declined"


const userName = "user"
const acctBal = "1000";
const atmPin = "123#"
if(userName === "user" && atmPin === "123#"){
    console.log(`Transaction Successful! Account: ${acctBal}`)
}else{
    console.log("Transaction failed!");
}

//Switch statement
const days = Math.floor(Math.random()*7);

switch(days){
    case 0: 
        console.log("Today is Sunday");
        break;
    case 1:
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is Tuesday");
        break;
    case 3:
        console.log("Today is Wednesday");
        break;
    case 4:
        console.log("Today is Thursday");
        break;
    case 5:
        console.log("Today is Friday");
        break;
    case 6:
        console.log("Today is Saturday");
        break;
    default:
        console.log("Invalid entry");
}

Task 6
Using switch create a banking system that authenticate user, deposits, withdraws and checkbalance.

let myInput = prompt("Enter Username or PIN")
// console.log(myInput);
let loginPin = myInput.toLowerCase();
console.log(myInput, loginPin);

let accName = "Marvellous";
let atmPIN = "1234";
let deposit = "deposit";
let withdraw = "withdraw";
let checkbalance = "balance";
let myAcctBal = 1000;

const isAuth = loginPin === accName.toLowerCase() || loginPin === atmPIN;
console.log(isAuth);

if(isAuth){
    console.log("Welcome to GTB bank");
    let tran = prompt("What would you like to do? ").toLowerCase();
    // console.log(tran);

    switch(tran){
        case deposit:
            console.log("Deposit");
            let depAmt = Number(prompt("Enter amount to deposit"))
            console.log(depAmt);
            // myAcctBal = myAcctBal + depAmt;
            myAcctBal += depAmt;
            console.log(`Your new account balance is $${myAcctBal}`);
            break;
        case withdraw:
            console.log("Withdraw");
            let withAmt  = Number(prompt("Enter amount to withdraw"))

            if (withAmt> myAcctBal){
                console.log("Insufficient funds");
            }else{
                myAcctBal -= withAmt
                console.log(`Your new account balance is ${myAcctBal}`);
            }
            break;
        case checkbalance:
            console.log("Check Account balance");
            console.log(`Your acccount balance is $$ {myAcctBal`)
            break;
        default:
            console.log("Invalid transaction");
    }
}else{
    console.log("Wrong PIN or Username");
}

Ternary operators
syntax:
booleanCondition ? expression1 : expression2
 , 
const isAdmin = true;
isAdmin ? console.log("Login successfully") : console.log ("Unauthorized user")

