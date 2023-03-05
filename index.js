// // Question 1
// // Differences between mutating and non-mutating array methods - 5 methods each
// /**
//     MUTATING ARRAY METHODS
//     - mutating methods are methods that change the original array. 
//     - they modify the array in place, meaning they directly alter the values of the array without creating a new one. 
//     5 methods
//     pop(), push(), splice(), shift(), reverse().

//     NON-MUTATING ARRAY METHODS
//     - do not modify the original array, (original array remains unchanged).
//     - they create a new array with the modified values instead. 
//     5 methods
//     concat(), includes(), slice(), find(), map().
// */

// // Question 2
// /**
//     Here is an array of languages: [‘C#’, ‘JavaScript’, ‘Ruby’, ‘PHP’, ‘Python’]. Perform this operation on them 
//     - 1. Add ‘Kotlin’ to the end of the array
//     - 2. Add ‘Java’ after ‘Ruby’
//     - 3. Remove the first item in the array
//     - 4. Add ’Scala’ and ‘Swift’ to the beginning of the array
//     - 5. Replace ‘PHP’ with ‘Go’ and ‘Rust’
//  */

// // Solution 1 - using .SPLICE()
// let arrayOfLanguages = ["C#", "JavaScript", "Ruby", "PHP", "Python"]

// // // Add ‘Kotlin’ to the end of the array
// arrayOfLanguages.splice(5, 0, "Kotlin"); // output ["C#", "JavaScript", "Ruby", "PHP", "Python","Kotlin"]

// // // Add ‘Java’ after ‘Ruby’ 
// arrayOfLanguages.splice(3, 0, "Java"); // output ["C#", "JavaScript", "Ruby", "Java", PHP", "Python"]

// // // Remove the first item in the array
// arrayOfLanguages.splice(0, 1); // output ["JavaScript", "Ruby", "Java", "PHP", "Python", "Kotlin"]

// // // Add ’Scala’ and ‘Swift’ to the beginning of the array
// arrayOfLanguages.splice(0, 0, "Scala", "Swift"); // output ["Scala", "Swift", "JavaScript", "Ruby", "Java", "PHP", "Python", "Kotlin"]

// // // Replace ‘PHP’ with ‘Go’ and ‘Rust’
// arrayOfLanguages.splice(5, 1, "Go", "Rust")
// console.log(arrayOfLanguages);
// // // Final output ["Scala", "Swift", "JavaScript", "Ruby", "Java", "Go", "Rust", "Python", "Kotlin"]


// // Solution 2 - using COMBINED DIFFERENT METHODS
// let arrayOfLanguages2 = ["C#", "JavaScript", "Ruby", "PHP", "Python"]

// arrayOfLanguages2.push("Kotlin"); // .push() to add kotlin to the end

// arrayOfLanguages2.splice(3, 0, "Java"); // .splice() to add java in between the array

// arrayOfLanguages2.shift(); // .shift() to remove the first item(c#) from the array

// arrayOfLanguages2.unshift("Scala", "Swift"); // .unshift() add scala and swift to the beginning of the array

// arrayOfLanguages2.splice(5, 1, "Go", "Rust"); // .splice() remove php and replace with go and rust
// console.log(arrayOfLanguages2);


// // Question 3
// // What will be the value of fruit after calling the function changeFruit?
// let fruit = ['apple', 'mango', 'banana'];
// function changeFruit(fruit) {
//     fruit[2] = "orange";
//     return fruit;
// }
// console.log(changeFruit(fruit)); // Output: ['apple', 'mango', 'orange']
