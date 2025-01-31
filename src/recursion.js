// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
  //edge case
  //if n is negetive return null
  if(n < 0) {
    return null;
  }
  //Base Case
  //when n equals 1 return 1
  if (n === 0) {
    return 1;
  }
  //Recursion
  //return: n multiplied by: call itself with n - 1
  return n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array, start = 0) {
  //base
  //if array length is 0 return start
  if (array.length === 0) {
    return start;
  }
  //code
  //add first element in array to start
  start += array[0];
  //recursion
  //return: call itself with array without first element, and new start value
  return sum(array.slice(1), start);
};//////////////I believe I was meant to ignore this one. Have not double checked

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array, seed = 0) {
  //base case
  //stop when <array>s length is equal to 0
    
    //then return se
  //edge case

  //code

  //recursion

};

// 4. Check if a number is even.///can not use modulo. must use recursion
var isEven = function(n) {
  //edge case
  //if n is negetive make it positive
  if(n < 0) {
    n *= -1;
  }
  //base
  //if number is equal to 1 
  if (n === 1 || n < 0) {
    //then return false
    return false;
  }
  //if number is equal to 0
  if(n === 0) {
    //then return true
    return true;
  }
  //recursion
  //return function call
    //difference being n minus two
  return isEven(n - 2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
//add up all of the numbers that are under the given number
var sumBelow = function(n, result = 0) {
  //base 
  //if n equals 0 then return result
  if(n === 0) {
    return result;
  }
  //code
  //edge case
  //if n is negetive then add one to <n> and add it to <result>
  if(n < 0) {
    n += 1;
    result += n;
  }else {
  //else continue below
  //take away one from `n` and add it to <result>
  n -= 1;
  result += n;
  }
  //recursion
  //function call difference: add result
  return sumBelow(n, result);
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y, result = []) {
  //base case
  //if x is equal to y 
  if(x === y - 1 || x === y || x === y + 1) {
    //then return result
    return result;
  }
  //code
  //edge case
  //if x is bigger y 
  if(x > y) {
    //then take away one from x
    x -= 1;
  } else {
  //else continue below
  //add one to x 
  x += 1;
  }
  //add x to result
  result.push(x);
  //recursion
  //function difference: add result
  return range(x, y, result);
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  //base case
  //if exponent equals 0 
  if(exp === 0) {
    //return base
    return 1;
  }
  //edge case

  //code

  //recursion 
  //check if the exponent is negetive
  if(exp < 0) {
    //if so make <exp> positive 
    exp *= - 1;
    //and, do below but divide 1 by the original answer
    //to divide one by the original answer I had to surround the answer in quotes so the division arithmatic
    //did not effect the answer until I wanted it too (at the end).
  //param difference: exp with one less
  return 1 / (base * exponent(base, exp - 1));
  } else {
  //if exponent is positive then 
    //param difference: exp with one less
    return base * exponent(base, exp - 1);
  }
};
// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  //edge case
  //if n is 1 
  if(n === 1) {
    //return true;
    return true;
  }
  //base case
  //n is 2 
  if(n === 2) {
    //return true
    return true;
  }
  //else if n less than 1
  if(n < 1) {
    //return false
    return false;
  }
  //code

  //recursion
  //return
  //call difference: divide n by 2
  return powerOfTwo(n / 2);
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string, result = '') {
  //edge case

  //base case
  //if string is empty 
  if(!string.length) {
    //return result
    return result;
  }
  //code
  //add the first character from string to the beginning of result
  result = string[0] + result;
  //recursion
  //return statement
  //call difference: string without first character, add result
  return reverse(string.slice(1), result);
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string, result = '', index = 0) {
  //edge case

  //base case
  //if index is larger than or equal to string length
  if(result.length === string.length) {
    //return statement
    //if string is equal to result return true. otherwise false
    if(string.toUpperCase().replaceAll(" ", '') === result.toUpperCase().replaceAll(" ", '')) {
      return true;
    } else {
      return false;
    }
  }
  //code
  //add the <index> character from string of result
  result = string[index] + result; 
  //recursion
  //return statement
  //call difference: string, add result, plus one to index
  return palindrome(string, result, index + 1);
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
// ATTENTION DO NOT LEAVE COMMENTS IN THIS FUNCTION. The test is looking for any ('/').
//base case
//if y equals 1 
  //then return x

//recursion
//return statement
//x + below
//call difference: x, y minus one
var multiply = function(x, y) {
  if(y < 0 && x < 0) {
    y = -y;
    x = -x;
  }
if(y <= 1) {
  return x;
}
return x + multiply(x, y - 1)
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2, step = 0) {
  //edge case
  //if both strings are empty return true
  if(str1 === '' && str2 === '') {
    return true;
  }
  //base case
  //if we are on the last character AND they match:
  if(step === str1.length - 1 && step === str2.length - 1 && str1[step] === str2[step]) {
    //then return true
    return true;
  }
  //if the current two characters are not the same:
  if(str1[step] !== str2[step]) {
    //return false
    return false;
  }
  //code

  //recursion
  //return statement
  //function call difference: increment <step> by 1
  return compareStr(str1, str2, step + 1);
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str, array = [], step = 0){
  //base case
  //if <str> length equals <array> length
  if(str.length === step) {
    //return array
    return array;
  }
  //code
  //add fist element of <str> to <array>
  array.push(str[step]);
  //recursion
  //return statement
  //function call difference: increment <step> by one
  return createArray(str, array, step + 1);
};
// 17. Reverse the order of an array
var reverseArr = function (array, result = []) {
  //base case
  //if <array> is empty
  if(!array.length) {
    //return <result>
    return result;
  }
  //code
  //add first element of <array> to the beginning of <result>
  result.unshift(array[0]);
  //recursion
  //return
  //function call difference: remove first element from <array>
  return reverseArr(array.slice(1), result);
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length, result = []) {
  //base case
  //if <result> length is equal to <length>
  if(result.length === length) {
    //return result
    return result;
  }
  //code
  //add <value> to <result>
  result.push(value);
  //recursion
  //return statement
  //function call difference: add result
  return buildList(value, length, result);
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value, num = 0) {
  //base case
  //if <array> is empty
  if(!array.length) {
    //then return <num>
    return num;
  }
  //code
  //if first item in <array> is equal to <value>
  if(array[0] === value) {
    //then add one to <num>
    num += 1;
  }
  //recursion
  //return statement
  //function call difference: remove first item from <array>, add num
  return countOccurrence(array.slice(1), value, num);
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback, output=[]) {
  //base case
  //if <array> is empty then return output
  if(!array.length) {
    return output;
  }
  //code
  //pass first item in <array> to the callback function
  //add abouve result to output
  output.push(callback(array[0]));
  //recursion
  //return
  //callback difference: take out first item in <array>
  return rMap(array.slice(1), callback, output);
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n, current = 1, prevNum = 0, step = 1) {
  //edge case
  //if n is negetive return null
  if(n < 0) {
    return null
  }
  //if n is 0 return 0
  if(n === 0) {
    return 0;
  }
  //base case
  //if <step> is the same as <n>
  if(step === n) {
    //then return <current>
    return current;
  }
  //code

  //recursion
  //return 
  //callback difference: 
  //n,
  //current is <current> plus <prevNum>,
  //prevNum is <current>
  //add 1 to step
  return nthFibo(n, current + prevNum, current, step + 1);
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input, result = []) {
  //edge case

  //base case
  //if <input> is empty, return <result>
  if(!input.length) {
    return result;
  }
  //code
  //take first item in <input> then
  //capitalize it then
  //add it to <result>
  result.push(input[0].toUpperCase());
  //recursion
  //return
  //callback difference: remove first item from <input>
  return capitalizeWords(input.slice(1), result);
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(input, result = []) {
  //edge case

  //base case
  //if <input> is empty, return <result>
  if(!input.length) {
    return result;
  }
  //code
  //take first item in <input> then
  //capitalize just the first letter
  //combine with rest of word
  //add it to <result>
  result.push(input[0].slice(0, 1).toUpperCase() + input[0].slice(1));
  //recursion
  //return
  //callback difference: remove first item from <input>
  return capitalizeFirst(input.slice(1), result);
};//This is like my third time making this, pls forgive me for copy pasting

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj = {}) {
  //base case
  //if <str> is empty, return obj
  if(!str.length) {
    return obj;
  }
  //code
  //is first character in <str> also a property in <obj>
  if(obj[str[0]]) {
    //if yes then add one to current <obj> property
    obj[str[0]] += 1;
  } else {
    //else create a tally property for this letter
    //initialized with 1
    obj[str[0]] = 1;
  }
  //recursion
  //return
  //callback difference: remove first character from <str>
  return letterTally(str.slice(1), obj);
};
// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list, result = []) {
  //base case
  //stop when <list> is empty
  if(!list.length) {
    return result;
  }
  //code 
  //if the first element in <list> is NOT equal to the last element in <result>
  if(list[0] !== result[result.length - 1]) {
    //then add first element <list> to <result>
    result.push(list[0]);
  }
  //recursion
  //return
  //callback difference: remove first element from <list>,
  //add result
  return compress(list.slice(1), result);
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug, result = []) {
  //edge case 
  //remove eccess zeros

  //base case
  //stop when <array> is empty
  if(!array.length) {
    return result;
  }
  //code 
  //add the first item in <array> to <result> 
  result.push(array[0]);
  //add <aug> to that 
  result[result.length - 1].push(aug);
  //recursion
  //return
  //callback difference: remove first item form <array>,
  //add result
  return augmentElements(array.slice(1), aug, result);
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array, result = []) {
  //base case
  //stop when <array> is empty
  if(!array.length) {
    return result;
  }
  //code
  //if the first element in <array> is NOT zero AND,
  //the last element in <result> is NOT zero then
  if(array[0] !== 0 || result[result.length - 1] !== 0) {
    //add the first element in <array> to <result>
    result.push(array[0]);
  }
  //recursion
  //return
  //callback difference:
  //remove first item from <array>,
  //add result
  return minimizeZeroes(array.slice(1), result);
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
//all odd numbers must be positive 
//and all even numbers must be negetive
var alternateSign = function(array, result = []) {//since we are taking item from <array> and adding it to <result>. the isEven logic will be flipped
  //base case
  //stop when <array> is empty
  if(!array.length) {
    return result;
  }
  //code
  //check if result is even
  if(result.length % 2 === 0) {
    //if even then
    //make the first item in <array> positive,
    //then add it to <result>
    result.push(array[0] > 0 ? array[0] : -array[0]);
  } else {
    //if odd then
    //make the first iten in <array> negetive,
    //then add it to <result>
    result.push(array[0] < 0 ? array[0] : -array[0]);
  }
  //recursion
  //return statement
  //param: array minus first item + result
  return alternateSign(array.slice(1), result);
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str, arr = str.split(' '), result = []) {
  //base case
  //stop when arr is empty
  if(!arr.length) {
    return result.join(' ');
  }
  //code
  //check if first element in arr is NOT a number
  if(String(Number(arr[0])) === 'NaN') {
    //if not a number
    //just add it to <result>
    result.push(arr[0]);
    //if it is a number 
      //then check which number it is and replace it with the appropriate string
  } else if (arr[0] === '0') {
    result.push('zero');
  } else if (arr[0] === '1') {
    result.push('one');
  } else if (arr[0] === '2') {
    result.push('two');
  } else if (arr[0] === '3') {
    result.push('three');
  } else if (arr[0] === '4') {
    result.push('four');
  } else if (arr[0] === '5') {
    result.push('five');
  } else if (arr[0] === '6') {
    result.push('six');
  } else if (arr[0] === '7') {
    result.push('seven');
  } else if (arr[0] === '8') {
    result.push('eight');
  } else if (arr[0] === '9') {
    result.push('nine');
  }
  //recursion 
  //callback: remove first element from arr
  return numToText(str, arr.slice(1), result);
};
console.log();
// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
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