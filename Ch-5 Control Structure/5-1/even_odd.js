let number = +prompt("Enter any number : ");

if (Math.floor(number / 2) * 2 == number) {
  // number % 2 != 0
  document.write(`<h3>${number} is even</h3>`);
} else {
  document.write(`<h3>${number} is odd</h3>`);
}

// Math => floor() => To Convert Float Number to Int Number
// let a = 15,
//   b = 2;

// let num = Math.floor(45.56);

// console.log(Math.floor(a / b)); //7
// console.log(num); //5
