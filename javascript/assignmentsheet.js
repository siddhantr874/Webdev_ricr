// 1. Print "Hello World"
function helloWorld() {
  console.log("Hello World");
}
helloWorld();


// 2. Display your name
function displayName() {
  console.log("Siddhant");
}
displayName();


// 3. Print "Welcome to College"
function welcomeToCollege() {
  console.log("Welcome to College");
}
welcomeToCollege();


// 4. Takes a name and prints "Hello [name]"
function greet(name) {
  console.log("Hello " + name);
}
greet("Siddhant");


// 5. Takes two numbers and prints their sum
function printSum(a, b) {
  console.log(a + b);
}
printSum(10, 20);


// 6. Takes a number and prints its square
function printSquare(n) {
  console.log(n * n);
}
printSquare(5);


// 7. Takes two numbers and returns their addition
function add(a, b) {
  return a + b;
}
console.log(add(3, 7));


// 8. Returns the multiplication of two numbers
function multiply(a, b) {
  return a * b;
}
console.log(multiply(4, 5));


// 9. Takes a name and age and prints a message
function printMessage(name, age) {
  console.log("My name is " + name + " and I am " + age + " years old.");
}
printMessage("Siddhant", 20);


// 10. Returns the average of three numbers
function average(a, b, c) {
  return (a + b + c) / 3;
}
console.log(average(10, 20, 30));


// 11. Call a function multiple times with different values
function double(n) {
  return n * 2;
}
console.log(double(5));
console.log(double(10));
console.log(double(15));


// 12. Returns the greater of two numbers
function greater(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
console.log(greater(8, 3));
console.log(greater(2, 9));