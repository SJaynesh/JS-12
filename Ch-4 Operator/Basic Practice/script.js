/*
    To take input from user. 
    prompt("Message") // String


    * Type Casting :

        String => Number (int) (float)
        String => Bool
        Number => String 
*/

let name = prompt("Enter your good name : ");

document.write(`Name : ${name} <br><br>`);

// String -> Number(Int)
let a = Number.parseInt(prompt("Enter first number : "));
let b = Number.parseInt(prompt("Enter second number : "));

// console.log(typeof a); //  Number
// console.log(a); //  Number

document.write(`${a} + ${b} = ${a + b} <br><br>`);

const PI = parseFloat(prompt("Enter PI value : "));

document.write(`PI : ${PI}`);
