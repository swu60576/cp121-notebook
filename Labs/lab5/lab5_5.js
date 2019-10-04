function recurseFibo(x) {
  if (x === 0) {
    return 0;
  } else if (x == 1) {
    return 1;
  } else {
    return recurseFibo(x - 1) + recurseFibo(x - 2);
  }
}

write(recurseFibo(6));

function iterFibo(x) {
  if (x === 0) {
    return 0;
  } else if (x == 1) {
    return 1;
  } else {
    let i = 2;
    let a = 0;
    let b = 1;
    let c = a + b;
    while (i != x) {
      a = b;
      b = c;
      c = a + b;
      ++i;
    }
    return c;
  }
}

write(iterFibo(6));
