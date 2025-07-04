console.log("JavaScript is running.....");

// Variables

/*
    How to create variable in JavaScript ?

    ans : Using let, const and var keyword


    Variable create Syntax :  keyword variableName;


    Datatype :
        1. Number (int, float)
        2. String (text)
        3. Boolean (true, false)
        4. undefined
        5. Null

    Typeof Function

    Syntax : typeof(variable)
             typeof variable
*/

let number = 10;
let pi = 3.14;
var name = "Hello JavaScript !!";
let isLogin = true;
let myVar;
let n = null;

console.log(number);
console.log(pi);
console.log(name);
console.log(isLogin);
console.log(myVar);
console.log(n);

console.log("-----------------");

number = null;

console.log(typeof n); // Object
console.log(typeof "10"); // String

let msg = "Jaynesh";
let age = 20;
let school = "ABC School";

// + => concate(marge)

// cout << "Name : " << name << endl;
document.write("<h4>Name : " + msg + "</h4>");
document.write("Age : " + age, "<br>");
document.write("School : ", school, "<br><br>");

let fname = "Jaynesh";
let lname = "Sarkar";

// ${variableName}  => ${} => String Interpolation

document.write(`<p> I am ${fname + lname} </p>`);

let a = 10,
  b = 4;

// let ans = a + b;

document.write(`${a} + ${b} = ${a + b} <br>`);
document.write(`${a} - ${b} = ${a - b} <br>`);
document.write(`${a} * ${b} = ${a * b} <br>`);
document.write(`${a} / ${b} = ${a / b} <br>`);
document.write(`${a} % ${b} = ${a % b} <br>`);

const PI = 3.14;

// PI = 3.15;

console.log(`PI value : ${PI}`);
