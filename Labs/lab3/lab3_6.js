function cube(n) {
  let sum = 0;
  let num = n.toString();
  let len = num.length;

  for (let i = 0; i < len; ++i) {
    sum += parseInt(num[i]) * parseInt(num[i]) * parseInt(num[i]);
  }

  return sum;
}

let test = cube(123);
write(test);
