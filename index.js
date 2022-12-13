// Recursive Factorial Function

function factorial(m) {
  if (m <= 1) return 1;
  return m * factorial(m - 1)
}

console.log(factorial(2))


//  Fibonacci Function using recursion

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

arr = []
for (var i = 0; i <= 10; i++) {
  arr.push(fibonacci(i))
}
console.log(arr)

// Dynamic Method of Storing Values 

function fib(n) {
  /* Declare an array to store Fibonacci numbers. */
  let f = new Array(n + 2); // 1 extra to handle case, n = 0
  let i;
  /* 0th and 1st number of the series are 0 and 1*/
  f[0] = 0;
  f[1] = 1;
  for (i = 2; i <= n; i++) {
    /* Add the previous 2 numbers in the series
    and store it */
    f[i] = f[i - 1] + f[i - 2];
  }
  return f[n];
}
for (var i = 0; i <= 10; i++) {
  console.log(fib(i))
}

function reverse(str, len) {
  if (len == str.length) {
    return;
  }
  reverse(str, len + 1);
  console.log(str[len])
}

reverse('ramesh', 2)