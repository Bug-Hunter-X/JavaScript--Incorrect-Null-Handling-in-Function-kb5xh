function foo(a, b) {
  if (a === null && b === null) {
    throw new Error('Both parameters cannot be null.'); // Throw an error if both are null
  } else if (a === null || b === null) {
    return 0; // Handle cases where only one is null
  } else {
    return a + b; //Normal operation
  }
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: 0
console.log(foo(1, null)); // Output: 0
//console.log(foo(null, null)); // Throws an error