function foo(a, b) {
  // Check if either argument is null, undefined or NaN
  if (a === null || a === undefined || isNaN(a) || b === null || b === undefined || isNaN(b)) {
    // Handle the case where either a or b is invalid gracefully
      return 0; // Or throw an error, depending on your requirements
  }
  return a + b;
}

console.log(foo(null, 5)); // Output: 0
console.log(foo(5, null)); // Output: 0
console.log(foo(5, 5)); // Output: 10
console.log(foo(0,5)); // Output: 5
console.log(foo('',5)); //Output: 5
console.log(foo(5,NaN)); //Output: 0