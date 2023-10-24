// Solve all of the following prompts using recursion.



// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function (n) {
  // use n to make an array and that is made of n-1 until n =1
  // multiplies the numbers in the array
  // return function call
  if (n === 0) {
    return 1
  }
  if (n > 0) {
    return n * factorial(n - 1)
  }
  if (n < 0) {
    return null
  }
};


/*
function jazz(array){
  condition statement
      V
  jazz(arry)

  V
  Return end result

  
}
*/

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function (array) {
  // Base case: if the array is empty, the sum is 0
  if (array.length === 0) {
    return 0;
  }
  // Recursive case: sum = first element + sum of the rest of the array
  // Slice the array to remove the first element and sum the rest using recursion
  return array[0] + sum(array.slice(1));
};



// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function (array) {
  // base case
  if (array.length === 0) {
    return 0;
  }
};

// 4. Check if a number is even.
var isEven = function (n) {
  //if n = 1 return true
  //if n is odd return false if n is a decimal return false
  if (n === 0) {
    return true;
  }
  if (n === 1) {
    return false;
  }
  //recursive case
  return isEven(Math.abs(n) - 2);
}
  ;

// 5. Sum all integers below a given integer.
// sumBelow(10); 9+8+7+6+5+4+3+2+1// 45
// sumBelow(7) 6+5+4+3+2+1; // 21
var sumBelow = function (n) {
  // Base case
  // if 0 then return 0
  if (n === 0) {
    return 0
  }
  // if n < 0 then add 1 else sub 1  
  return n > 0 ? n - 1 + sumBelow(n - 1) : n + 1 + sumBelow(n + 1)
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]    5,15  > [6,7,8,9...14]
var range = function (x, y, between = []) {
  //should return empty array if no integers in range
  if (x === y) {
    return between;
  }
  // Base Case
  if (x === y - 1) {
    //return result array
    return between
  }
  if (x === y + 1) {
    return between;
  }
  // create array

  // create conditional statement

  if (x > y + 1) {

    between.push(x - 1)
    return range(x - 1, y, between)
  } else if (x < y - 1) {
    // pushing the next numerical value after x between array
    between.push(x + 1)
    return range(x + 1, y, between)
  }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
// The store array is used to store the bases cganges
var exponent = function (base, exp, store = []) {
  // Base case
  // for how long exp is, multiply base to its self that many times >>> 2^3 = 2 * 2 * 2
  // Use store to store base and the following base changes     
  store.push(base) // [] > [base,...]
  // Recursive Case
  // if exp is above 1 then mult base by the first interger and sub exp by 1 
  if (exp > 1) {
    return exponent(base * store[0], exp - 1, store)
  }
  // if exp is under 1 then:
  //  divide 1 over base and the first interger of store and add 1 to exp
  // repeat this only id store[1] is not defined which will happen the first time it is run
  else if (exp < -1 && store[1] === undefined) {
    return exponent(1 / (base) * 1 / (store[0]), exp + 1, store)
  }
  //  divide 1 over the first interger of store and mult it by base and add 1 to exp
  // runs only when store[1] has a type of number
  // store[0] is only divided because base has already been manipulated by the neg exp
  else if (exp < -1 && typeof (store[1]) === 'number') {
    return exponent((base) * 1 / (store[0]), exp + 1, store)
  }
  // If exp is 1 or -1 then return base
  if (exp === 1 || exp === -1) {
    return base
  }
  // If base is 0 then return 1
  if (exp === 0) {
    return 1
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true       2^0 = 1
// powerOfTwo(16); // true      2^4 = 2
// powerOfTwo(10); // false&
var powerOfTwo = function (n) {
  //base case 
  // if n is 0, it is not a power of 2, so return false
  if (n === 0) {
    return false;
  }
  //if n is 1, it is 2^0 = 1, which is a power of 2 so return true
  if (n === 1) {
    return true
  }
  //if n is not divisible by 2 its not a power of 2
  if (n % 2 !== 0) {
    return false;
  }
  // if n is even recursively call the powerofTwo function with n/2 as the argument
  return powerOfTwo(n / 2);
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function (string, resultStr = '') {
  // base case 
  if (!string.length) {
    return resultStr;
  }
  // access the first index of resultStr and assign to the last character in string
  resultStr += string[string.length - 1];
  // take last character off string
  string = string.slice(0, -1);
  // call reverse with param as arguments
  return reverse(string, resultStr);
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function (string) {
  //base case
  //find out if the first and last chrarcters are the same 
  if (string.length === 1) {
    return true;
  }
  if (string.length === 1) {
    return string[0] === string[1];
  }
  // take out the spaces in the string
  string = string.replace(/\s*/g, "")
  //compare the first and last character while making sure that it is lowercased
  if (string[0].toLowerCase() === string.slice(-1).toLowerCase()) {

    return palindrome(string.slice(1, -1))
  }
  //if the first and last characters are not the same the string is not a palindrome
  return false;

  //
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2)  // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function (x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
// ATTENTION DO NOT LEAVE COMMENTS IN THIS FUNCTION. The test is looking for any ('/').

// Base case
  // for how long y is, add x to its self that many times
  // Use store to store x and the following x changes     
// Recursive Case
  // if y is above 1 then add x by the first interger and sub y by 1 
  // if y is under 1 then add x by the first interger and sub y by 1
var multiply = function (x, y, store = []) { 
  store.push(x) 
  if (y > 1) {
    return multiply(x + store[0], y - 1, store)
  }
  else if (y < -1) {
    return multiply((x) + (store[0]), y + 1, store)
  }
  if (y === 1) {
    return x
  }
  if (y === -1){
    return -x
  }
  if (y === 0) {
    return 0
  }
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function (x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function (x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function (str1, str2) {
  //base case 
  // if both strings are empty, they are equal
  if (str1 === '' && str2 === '') {
    return true;
  }
  //if one of the strings is empty while the other is not they are not equal
  if (str1 === '' || str2 === '') {
    return false;
  }
  //recursive case comparing the first chararcters of both strings 
  if (str1[0] === str2[0]) {
    return compareStr(str1.slice(1), str2.slice(1))
  }
  //if the forst characters are not equal, the strings are not equal
  return false;
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function (str) {
  //base case 
  //if the input string is empty, return a empty array
  if (str === '') {
    return []
  }
  //recursive case take the first character from the string and put them together (concatenate)
  return [str[0]].concat(createArray(str.slice(1)));
};

// 17. Reverse the order of an array
var reverseArr = function (array) {
  if (array.length === 1) return [array[0]];
  var list = reverseArr(array.slice(1, array.length));
  list.push(array[0]);
  return list;
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function (value, length) {
  // Check if the input array has only one element
  if (length === 0)
    return [];
  var list = buildList(value, length - 1);
  // Add the first element of the original array to the reversed array
  list.push(value);
  return list;
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function (array, value, store = []) {
  //base case 
  // if array is empty they are no occurences 
  
  //the recursive case checks if the first element of the array is equal to the target value
  //if it is, add 1 and call the function on the rest of the array
  //if it is not call the function on the rest of the array
  let i = 0

  if (array.length > 1 && array[i] === value){
    i += 1
    store.push(array[i])
    return countOccurrence(array, value, store)
  }



  return store.length
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function (array, callback) {
  //base case 
  //if the input array is empty, return as an empty array
  if (array.length === 0) {
    return [];
  }
  //recursive case call the function on the rest of the array but not the first element 
  //this recursive call has the remaining elements of the array using the same callback function
  var list = rMap(array.slice(1, array.length), callback);

  //apply the callback function to the first element of the arrayy and add the result to the beginning of the list 
  var mappedValue = callback(array[0]);
  list.unshift(mappedValue);
  //return the updated list with the mapped value at the beginning 
  return list;
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function (obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function (obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function (obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function (n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function (n, hold = 0, sum = 1) {
  // Base Case
  // add hold[0] and hold[1]
  // replace hold[0] with [1] push sum to hold[1]
  // Sub 1 from n each time
  if (n < 0){
    return null
  }
  if (n === 0){
    return 0
  }
  if (n === 1){
    return sum
  }
  if (n > 1){
    return nthFibo(n-1, sum, sum += hold )
  }
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function (input) {
  //base case 
  //if the array is empty return an empty array
  if (input.length === 0) {
    return []
  }
  // Call the capitalizeWords function recursively on the sliced array
  var list = capitalizeWords(input.slice(1, input.length))
  // Capitalize the first word of the original array and add it to the beginning of the 'list' array.
  list.unshift(input[0].toUpperCase());
  // Return the modified 'list' array with the first word capitalized and the rest of the words capitalized
  return list;
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function (array) {
  //base case 
  // if the input array is empty 
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function (obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function (arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function (str, obj) {
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function (list) {

};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function (array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function (array) {
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function (array) {
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function (str) {
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function (tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function (array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function (array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
