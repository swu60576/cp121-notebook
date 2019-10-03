//algorithm 1
function recursFactorial(n) {
  if (n == 1) {
    return 1;
  } else {
    return n * recursFactorial(n - 1);
  }
}

let facto = recursFactorial(5);
write(facto);

//algorithm 2
function iterFactorial(n) {
  let result = 2;
  for (let j = n; j > 2; --j) {
    result *= j;
  }
  return result;
}

facto = iterFactorial(5);
write(facto);
