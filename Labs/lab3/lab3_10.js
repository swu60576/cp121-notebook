// ((-1)*b + sqrt((b*b)-(4*a*c)))/(2*a)

function quadratic(equation) {
  let abc = equation.split("+");
  let a = abc[0][0] == "x" ? 1 : parseInt(abc[0][0]);
  let b = abc[1][0] == "x" ? 1 : parseInt(abc[1][0]);
  abc = abc[2].split(" ");
  let c = abc[0];
  write("a: " + a + " b: " + b + " c: " + c);
  let coef = b * b - 4 * a * c;
  if (coef <= 0 || a === 0) {
    write("invalid equation or no result in real number");
  } else {
    if (coef === 0) {
      write((-1 * b) / (2 * a));
    } else {
      let result1 = (-1 * b + sqrt(b * b - 4 * a * c)) / (2 * a);
      let result2 = (-1 * b - sqrt(b * b - 4 * a * c)) / (2 * a);
      write("result1: " + result1 + " result2: " + result2);
    }
  }
}

quadratic("x2+9x+20 = 0");
quadratic("x2+2x+20 = 0");
