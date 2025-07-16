let n = +prompt("Enter any number : ");

document.write(`Number : ${n} <br><br>`);

// for (let i = 1; i <= n; i++) {
//   if (i % 2 != 0) {
//     console.log(i);
//   }
// }
let len = 0;

for (; n != 0; len++) n = Math.floor(n / 10);

document.write(`Number Length: ${len}`);
