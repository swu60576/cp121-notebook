function recurseMultiply(x, y) {
  if (y == 1) {
    return x;
  } else {
    return x + recurseMultiply(x, y - 1);
  }
}

write(recurseMultiply(5, 3));

