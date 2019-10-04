//algorithm 1
function seven(n) {
  let sum = 0;
  for (let i = 1; i <= n; ++i) {
    if (!(i % 10 === 0)) {
      sum += i;
    }
  }
  return sum;
}

let test = seven(12);
write(test);

//algorithm 2
function luckySeven(n) {
  let x = floor(n / 10);
  let sum = (n + 1) * (n / 2) - ((10 * x + (n > 10 ? 10 : 0)) * x) / 2;
  return sum;
}

test = luckySeven(12);
write(test);
