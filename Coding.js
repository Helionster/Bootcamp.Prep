// printReverse

// function printReverse(min,max){
//     for (let i = max - 1 ; i > min; i--){
//         console.log(i)
//     }
// }
// (printReverse(90,94))

// sumNums

// Write a function `sumNums(max)` that returns the sum of all positive numbers less
// than or equal to max.

// function sumNums(max){

//     let sum = 0

//     for (let i = 0 ; i <= max; i++){
//         sum += i
//     }
//     console.log(sum)
// }

// sumNums(4)
// sumNums(10)
// sumNums(365)

// isFactorOf

// Define a function `isFactorOf(number, factor)` that returns `true` if `factor`
// is a factor of `number`. `false` otherwise. A factor is a number that divides
// another number without a leftover remainder.
//
// Examples:
//
// isFactorOf(6,2); // => true
// isFactorOf(-6, 2); // => true
// isFactorOf(5,0); // => false
// isFactorOf(22, 7); // => false

// function isFactorOf(number,factor){
//     if (number % factor === 0)
//         console.log("true")
//     else
//         console.log("false")
    
// }
// isFactorOf(22,7)

// fizzBuzz

// Define a function `fizzBuzz(max)` that takes a number and prints  every number
// from 0 to `max` that is divisible by either 3 or 5, but not both.
//
// Examples:
//
// fizzBuzz(20); // prints
// 3
// 5
// 6
// 9
// 10
// 12
// 18

// function fizzBuzz(max){
//     for (let i = 1; i < max; i++){
//         if ( i % 3 === 0 && i % 5 === 0)
//             continue
//         else if ( i % 3 === 0 || i % 5 === 0)
//             console.log(i)
//     }
// }

// fizzBuzz(20)

// isPrime

// Define a function `isPrime(number)` that returns `true` if `number` is prime.
// Otherwise, false. Assume `number` is a positive integer.
//
// Examples:
//
// isPrime(2); // => true
// isPrime(10); // => false
// isPrime(11); // => true
// isPrime(9); // => false
// isPrime(2017); // => true

// A prime number is a number that is only divisable by itself and "1".

// function isPrime(number){ 
//     for (let i = 2; i < number; i++) {
//         if (number % i === 0) {
//             // console.log(false)
//             // return;
//             return false
//         }
//     }

//     // console.log(true)
//     return true
// }

// console.log(isPrime(2));
// console.log(isPrime(10));
// console.log(isPrime(11));
// console.log(isPrime(9));
// console.log(isPrime(2017));

// // Write a function `logEach(array)` that prints every element of the array and its
// index to the console.
//
// Example:
//
// logEach(["Anthony", "John", "Carson"]); // prints
// 0: Anthony
// 1: John
// 2: Carson
// 
// function logEach(array){

//     for ( let i = 0; i < array.length; i++){
//         let name = i + ": " + array[i]
//         console.log(name)
//     }
// }
// logEach(["Anthony", "John", "Carson"])

// Write a function range(start, end) that returns an array that contains all
// numbers between 'start' and 'end' in sequential order.
//
// Examples:
//
// range(1,4) => [1,2,3,4]
// range(4,2) => []

// function range(start, end) {
//     let arr = []

//     for (let i = start; i <= end; i++) {
//         arr.push(i)
//     }
    
//     return arr
// }

// console.log(range(1,4))
// console.log(range(4,2))

// Write a function sumArray(array) that takes in an array of numbers that returns the
// total sum of them.
//
//
// Examples:
//
// sumArray([5, 6, 4]); // => 15
// sumArray([7, 3, 9, 11]); // => 30

// function sumArray(array){

//     sum = 0

//     for (let i = 0; i < array.length; i++){
//         sum += array[i]
//     }
//     console.log(sum)
// }
// sumArray([5, 6, 4])
// sumArray([7, 3, 9, 11])

// Write a function `capWords(words)` that takes in an array of words and
// returns a new array where every word is capitalized.
//
// Example:
//
// capWords(['hello', 'boOtCaMp', 'PREP!']); // => ['HELLO', 'BOOTCAMP', 'PREP!']

// function capWords(words){
//     let arr = []
    
//     for (let i = 0; i < words.length; i++){
//         let word = words[i]

//         arr.push(word.toUpperCase())
//     }
//     console.log(arr)
// }
// capWords(['hello', 'boOtCaMp', 'PREP!'])

// // Write a function `wordPeriods(sentence)` that takes in a sentence and returns a new
// sentence where every word has period after it.
//
// Examples:
//
// wordPeriods('hello world'); // => 'hello. world.'
// wordPeriods('what is the weather today'); // => 'what. is. the. weather. today.'
// 
// function wordPeriods(sentence){
//     for ( let i = 0; i <=sentence.length; i++){
//         let words = sentence.split(" ")
//         let newSent = words.join(". ") + "."
//         console.log(newSent)
//         break
//     }
// }
// wordPeriods('hello world')
// wordPeriods('what is the weather today')

// Write a function `maxValue(array)` that returns the largest value in `array`.
// Assume `array` is an array of numbers.
//
// Examples:
//
// maxValue([12, 6, 43, 2]); // => 43
// maxValue([]); // => null
// maxValue([-4, -10, 0.43]); // => 0.43

function maxValue(array){

    max = null

    if (array === []){
        return null
    }

    for (let i = 0; i < array.length; i++){
        if (array[i] > max){
            max = array[i]
        }   
    }
    return max
}

console.log(maxValue([12, 6, 43, 2]))
console.log(maxValue([]))
console.log(maxValue([-4, -10, 0.43]))