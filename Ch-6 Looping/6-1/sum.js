let n = +prompt("Enter any number : "); // 5

let a = 1;
let mul = 1;

while (a <= n) {
  // 6 <= 5
  //   document.write(a + "  ");
  mul *= a; // 10 + 5 = 15
  a++; // 6
}

document.write("Factorial : " + mul);
