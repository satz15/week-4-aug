// 1. Write a JavaScript function to check whether a string is blank or not.

function blank(str) {
  let trimmedstr = str.trim();
  return trimmedstr === "";
}

console.log(blank(""));
console.log(blank("abc"));

// 3. Write a JavaScript function that returns a string that has letters in alphabetical order

function sortStringAlphabetic(inputString) {
    let charArray = inputString.split('');
    charArray.sort();

    let sortedString = charArray.join('');
    return sortedString;
}
    let inputString = 'webmaster';
    let sortedString =  sortStringAlphabetic(inputString);
    console.log(sortedString);

// 5. Write a program that takes an arbitrary number of strings and concatenates them using a rest parameter

    // function concatenateStrings(...strings){
    //   const concatenatedString = strings.join('');
    //   return `Concatenated string: "${concatenatedString}"`;
    // }
    //   const result = concatenateStrings( "logical", "questions", "done" );
    //   console.log(result);


//   6. Write a program that takes an arbitrary number of numbers and finds the maximum value using a rest
      
    const max = findnum(30,40,50,60);
    function findnum(...numbers){
        if (numbers.length === 0) {
            return "No Numbers Provided.";
        }
       let max = numbers[0];

       for (let i = 1; i < numbers.length; i++) {
         if (numbers[i] > max) {
            max = numbers[i];
         }
       }
       return `maximum Value: ${max}`;
    }
    console.log(max);

    // 7. Write a program that creates a deep clone of a nested array using the spread syntax

     function deepCloneArray(arr) {
        return arr.map((item) => {
          if (Array.isArray(item)) {
            return deepCloneArray(item); 
          } else {
            return item;
          }
        });
      }
      
      const original = [1, [2, 3], [4, [5, 6]]];
      const cloned = deepCloneArray(original);
      
      console.log("Original Array:", original);
      console.log("Deep Clone:", cloned);
      
    //   8. Write a program that takes a function and an array of numbers, and spreads the array as function

    function sumNumbers(...numbers) {
        return numbers.reduce((sum, num) => sum + num, 0);
      }
      
      const numbers = [100, 200, 400];
      const result = sumNumbers(...numbers);
      
      console.log("Sum:", result);

    
      
      