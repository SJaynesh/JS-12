let a = +prompt("Enter a : ");
let b = +prompt("Enter b : ");
let c = +prompt("Enter c : ");

if (a == b && a == c && b == c) {
  console.log("All are equal...");
} else if (a == b || a == c || b == c) {
  console.log("Both are equal");
} else {
  if (a > b) {
    if (a > c) {
      console.log(`${a} is max..`);
    } else {
      console.log(`${c} is max..`);
    }
  } else {
    if (b > c) {
      console.log(`${b} is max..`);
    } else {
      console.log(`${c} is max..`);
    }
  }
}
