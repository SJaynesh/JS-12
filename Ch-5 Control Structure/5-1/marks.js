let marks = +prompt("Enter your marks : ");

if (marks >= 91 && marks <= 100) {
  console.log("Grade : A1");
} else if (marks >= 81 && marks <= 90) {
  console.log("Grade : A2");
} else if (marks >= 71 && marks <= 80) {
  console.log("Grade : B1");
} else if (marks >= 61 && marks <= 70) {
  console.log("Grade : B2");
} else if (marks >= 51 && marks <= 60) {
  console.log("Grade : C1");
} else if (marks >= 41 && marks <= 50) {
  console.log("Grade : C2");
} else if (marks >= 33 && marks <= 40) {
  console.log("Grade : D");
} else if (marks >= 0 && marks <= 32) {
  console.log("You are failed...");
} else {
  console.log("Please enter valid marks...");
}
