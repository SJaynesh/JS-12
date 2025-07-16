let num = +prompt("Enter any number : ");

document.write(`Number : ${num} <br><br>`); // 789

let rev = 0;

while (num != 0) {
  let rem = num % 10;
  rev = rev * 10 + rem;
  num = Math.floor(num / 10);
}

document.write(`Reverse Number : ${rev}`); // 987
