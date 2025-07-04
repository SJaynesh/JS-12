alert("Swapping .....");

let a = +prompt("Enter first number : "); // 10
let b = +prompt("Enter second number : "); // 20

document.write(`A : ${a} <br>B : ${b} <br><br>`);

// using Third Variable
// let c = a; // c  =  10
// a = b; // a = 20
// b = c; // b = 10

// Without using third variable (+ -)
// a = a + b; // 10 + 20 = 30
// b = a - b; // 30 - 20 = 10
// a = a - b; // 30 - 10 = 20

// (* /)
a = a * b; // 10 * 20 = 200 = a
b = a / b; // 200 / 20 = 10 = b
a = a / b; // 200 / 10 = 20 = a

document.write(`A : ${a} <br>B : ${b} <br><br>`);
