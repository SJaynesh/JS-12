let num = +prompt("Enter any number : ");

num % 2 == 0 ? console.log(`${num} is even`) : console.log(`${num} is odd`);

let a = +prompt("Enter a : ");
let b = +prompt("Enter b : ");
let c = +prompt("Enter c : ");

a < b
  ? a < c
    ? console.log(`${a} is minimum..`)
    : console.log(`${c} is minimum..`)
  : b < c
  ? console.log(`${b} is minimum..`)
  : console.log(`${c} is minimum..`);
