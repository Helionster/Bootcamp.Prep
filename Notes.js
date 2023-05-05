// Primitive - Values that can't be modified after creation.
// Non-Primitive - Values that can be modified after creation. 
// -------------------------------------------
// Conditionals 
// A conditonal evaluates to true or false.
// -------------------------------------------
// Numbers
// 0, 7, -42, 0.5, etc.
// -------------------------------------------
// String (text)
// 'hello', 'Bootcamp Prep!?!', '365' etc.
// -------------------------------------------
// Boolean
// true and false
// -------------------------------------------
// Undefined and Null both have single values. 
// -------------------------------------------
// Undefined - default value of variables/ JavaScript makes undefined a default value.
// Null - means nothingness or empty/ Us programmers define something as null.
// -------------------------------------------
// NaN - Not A Number
// i.e. - 20 * "happy"
// -------------------------------------------
// Operators ( In The Order Of PEMDAS)
// + (addition)
// - (subtraction)
// * (multiplication)
// / (division)
// % (modulo)
// -0 counts as a number value.

// Modulo gives us the remainder that results from a division.
// i.e. 10 % 3 == 1 

// Comparison Operators
// > (greater than)
// < (less than)
// >= (greater than or equal)
// <= (less than or equal)
// === (equal)
// !== (not equal)

// Boolean and Logical Operators  
//   A	      B	    A && B
// false	false	false
// false	true	false
// true	    false	false
// true	    true	true

// ### || (OR)
//   A	      B	    A || B
// false	false	false
// false	true	true
// true	    false	true
// true	    true	true

//   A	     !A
// true	    false
// false	true
// -------------------------------------------
// Strings
// 
// Strings are just text (think of it as a string of characters). 
// Strings can consist of any characters you see on your computer letters, numbers, symbols, punctuation, etc...
// Strings are always wrapped in quotation marks ' or ".
// -------------------------------------------
// Indexing Strings
// let str = 'bootcamp'
// undefined

// str[0]
// 'b'

// str[3]
// 't'

// str[7]
// 'p'

// str[100]
// undefined
// -------------------------------------------
// Common String Types
// String.prototype.toLowerCase 
// String.prototype.toUpperCase
// String.prototype.indexOf
// String.prototype.slice
// String.prototype.length
// + (concatenation)

// -------------------------------------------
// Slice - To call slice we specify the the start and end indices to slice. The ending index is exclusive. 
// If we call slice and pass in only the start index, it will return the rest of the string.
// ------------------------------------------- 
// Length is a string property we can use to get the number of characters in a string. To use it, we do not need parentheses
// The last character of any string is at index str.length - 1. This makes since because the index of the first character is always 0!
// -------------------------------------------
// Boolean is one of our data types, but every value has a "boolean identity".
// False, 0, empty strings (''), undefined, null, and NaN are all considered "falsey" values.
// Everything else is "truthy".
// Notice that this means the string 'false' is actually a truthy value (because it is a non-empty string!). 

// > Boolean(0)
// false
// > Boolean(42)
// true
// > Boolean("hello")
// true
// > Boolean("")
// false
// > Boolean(undefined)
// false
// > Boolean(null)
// false
// -------------------------------------------
// Command Line Interface (CLI) Examples

// $ ls
// Desktop
// Downloads
// Music

// $ cd Desktop

// $ ls
// my_bootcamp_prep
// myFile.js
// cats.jpeg
// -------------------------------------------
// Variables
// -------------------------------------------
// Variables are used to store information to be referenced and manipulated in a computer program. 
// 
// Declaring Variables
// 
// In JavaScript, in order to use a variable, we must declare it. 
// Variable declaration is the act of introducing the variable to the environment. 
// When we declare a variable, we will often initialize it to a value.
// 
// The Assignment Operator is " = "
// This is how we initialize a variable to a value.

// The expression n++ evaluates to the original/unchanged value, but it does indeed have the side effect of incrementing the variable. 
// On the flip side of that, the expression ++n immediately evaluates to the new/changed value. 
// We refer to these different ways to increment as postfix (n++) and prefix (++n)
// -------------------------------------------
// Functions
// -------------------------------------------
// Great programmers hate repeating themselves, we call this the DRY rule (Don't Repeat Yourself). 
// To avoid repeating expressions over and over again, we use functions.
// However, when JavaScript sees a function definition, JavaScript will not evaluate the code inside of the definition. 
// It will only "remember" the code so we can execute it later. 
// The code below only prints First! followed by Fourth!:

// console.log("First!")

// function myFunc() {
//   console.log("Second!")
//   console.log("Third!")
// }

// console.log("Fourth")

// To actually get myFunc to evaluate, we must call it with myFunc().

// function myFunc() {
//     console.log("Second!");
//     console.log("Third!");
//   }
  
//   console.log("First!");
//   myFunc();
//   console.log("Fourth!");

// In the case of our avg(10, 16) function call, num1 and num2 in the function definition are parameters, and the actual numbers, 10 and 16, are arguments!
// -------------------------------------------
// Using A Return Value
// 
// When we hit a return statement, we immediately exit the function, jump back to where we called the function, and evaluate the function call to the value it returned. 
// One thing to watch out for is that once we hit a return value we will exit the function immediately. 
// This means that any code after a return will not be executed!

// function myFunc() {
//     console.log('before return') 
//     return 'a return value';
//     console.log('after return') - This line of code doesn't run because it's after the return function.
//  }

// We will only see data that we print out using console.log. - Return doesn't print anything out.
// We can also write functions that don't have return statements. 
// If a function is not explicitly given a return value, it will automatically return undefined.
// -------------------------------------------
// Anatomy of a Function
// -------------------------------------------
// To wrap up, here is the general syntax used to define a function:
// function nameOfFunction(param1, param2, param3, paramN) {
//     // function body...
//     return "a return value!";
//  }
  
//   // Or we can define a function using a variable
//   let nameOfFunction = function(param1, param2, param3, paramN) {
//     // function body...
//     return "a return value!";
//  }

// By writing a function we can reuse code over and over again to solve similar problems with different input data (arguments). 
// For this reason, functions will be your bread and butter for programming.
// -------------------------------------------
// Importance of Naming
// -------------------------------------------
// Naming can make more sense in a scenrio in which the user has no prior knowledge or if the code is very scattered.
// It may help a lot to use an appropriate name to clarify variables and code in general.
// -------------------------------------------
// Looping
// -------------------------------------------
// For Loop 

// for ([initialization]; [condition]; [incrementer]) {
//     // this is the "body" of the loop
//     // do some code...
//  }

//  [initialization] - This expression is where you initialize a variable that will be used as the counter. 
//  This counter will be updated in the incrementer and checked in the condition.
  
//  [condition] - If this expression evaluates to true, we run another "cycle" of the loop. 
//  If false, we stop and exit the loop. We call each "cycle" in a loop an iteration.
  
//  [incrementer] - This expression is evaluated after every iteration of the loop. 
//  This step should bring the counter that was created in the [initialization] closer to a [conditional] that evaluates to false. 
//  If your code is trapped in an infinite loop hit ctrl + C to kill the program.

// Remember that a loop will stop running once the middle condition evaluates to false. 
// In the infinite loops below, the conditions will always be true!

// for (let i = 0; i < 200; i -= 1) {
//     //some code...
//   }
  
//   for (let i = 32; i >= 2; i += 1) {
//     //some code...
//   }
// -------------------------------------------
// While Loop
// -------------------------------------------
// [initialization]

// while ([conditional]) {
//   // do something...

//   [incrementer]
// }
// let i = 0;

// Example :
// while (i < 10) {
//   console.log(i);

//   i++;
// }
// -------------------------------------------
// Looping Keywords 
// -------------------------------------------
// Break - Terminates the loop.
// Continue - Skips the current loop iteration.

// If we wanted to change our printN function so that it skipped multiples of 5, we could write:

// function printNSkip5(n) {
//   for (let i = 0; i < n; i++) {
//     if (i % 5 === 0) {
//       continue;
//     }
//     console.log(i);
//   }
// }
// Prints all numbers from 0 to 30, except multiples of 5
// 
// If we wanted to change our printN function so that it stops as soon as it hits a multiple of 5, we could write a while loop:

// function printNStop5(n) {
//     let i = 1;
  
//     while (i < n) {
//       if (i % 5 === 0) {
//         break;
//       }
  
//       console.log(i);
//       i += 1;
//     }
//   }
// 
// While and For are two different ways we can loop in JavaScript. 
// They can be used interchangeably. 
// -------------------------------------------
// Arrays
// -------------------------------------------
// An Array is a data structure that solves this problem. 
// Arrays are contained in [] and store their elements in sequential order. 
// We can put elements into the array, replace elements in the array, and remove elements from the array.

// let alphabet = [
//   "a", "b", "c", "d", "e",
//   "f", "g", "h", "i", "j",
//   "k", "l", "m", "n", "o",  
//   "p", "q", "r", "s", "t",
//   "u", "v", "w", "x", "y",
//   "z"
// ]

// Indexing Arrays 

// If we want to get the nth-element in the array, we have to 'index' into the array. 
// Arrays start at the 0 index, not 1. This is the convention in programming.

// If we try to access an element that isn't in the array we get back undefined.
// -------------------------------------------
// Useful Methods
// -------------------------------------------
// Mutating Methods - a method which alters the array.
// Non-Mutating Methods - a method which doesn't alter the array

// Array.prototype.length - returns the number of elements in the array.
// Array.prototype.indexOf(element) - 
// Array.prototype.unshift(element) -
// Array.prototype.shift() - Adds to the beginning
// Array.prototype.push(element) - Pushes an element into an array.
// Array.prototype.pop() - Remove at the end the of the array.
// Array.prototype.concat(other_array) -
// Array.prototype.slice(startIndex, endIndex) -
// Array.prototype.length (property) - 
// Array.isArray(obj) - 
// 
// string.split(separator) is a very helpful string method that splits a string into an array of substrings on the separator and returns the new array.
// i.e. -
// let words = sentence.split(" ") // separator is a space
// [ 'Hey,', 'whats', 'up?', 'Hello' ]
// 
// The opposite of string.split(separator) is array.join(separator). 
// This array method joins an array into a string where array elements are concatenated by the separator.

// One side effect of split() and join() is that when used in conjunction they are very useful for replacing characters or words in a string.
// 
// i.e. - 
// let replaceE = str.split("e");
// [ 'H', 'y, whats up? H', 'llo' ]

//  replaceE.join("o") // all the e's got replaced with e's!
// 'Hoy, whats up? Hollo'
// -------------------------------------------
// Iterating Over Arrays
// -------------------------------------------
// let names = ["Tommy", "Fred", "Kurstie"]

// // names.length === 3
// for (let i = 0; i < names.length; i += 1) {
//     let name = names[i]
//     console.log(name)
//   }
  
// In the function below, the input to our printArray function can be any array.

// function printArray(arr) {
//   for (let i = 0; i < arr.length; i += 1) {
//     let ele = arr[i]
//     console.log(ele)
//   }
// }
// 
// The last element of any array is array.length - 1.
