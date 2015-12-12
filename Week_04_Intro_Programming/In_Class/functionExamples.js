var test = 2;

function sayMyName(name) {
    console.log("Hello " + name + "!");
}

sayMyName("Nick");
sayMyName("Victoria");
sayMyName("Sylvain");

function greeting() {
    console.log("Hi everybody!");
}

greeting();

// function addNumbers(num1, num2) {
//     console.log("num1 is " + num1);
//     console.log("num2 is "  + num2);
//     console.log("total is " + (num1 + num2));
//     console.log(num1 + num2 + test);
// }

function addNumbers(num1, num2) {
    return num1 + num2;
}

addNumbers(3, 4);
addNumbers(5, 5);
addNumbers(1, -9);
addNumbers(2, 3.1415);

function subtractNumbers(num1, num2) {
    // console.log(num1 - num2);
    return num1 - num2;
}

subtractNumbers(10, 5);

// console.log(num1);

var total = addNumbers(13, 24);

// var number = 10;
// addNumbers(number, 2);

function multiplyNumbers(num1, num2)
{
    console.log("The solution to num1 * num2 is: ");
    console.log(num1 * num2);
    console.log("hello!!!!");
    
    return num1 * num2;
}

var answer = multiplyNumbers(3, 4);

function addNumbers(num1, num2)
{
    var total = num1 + num2;
    return total;
}

addNumbers(3, 4);

addNumbers(7, 8);