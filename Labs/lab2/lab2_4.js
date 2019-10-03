for (let i = 1; i <= 100; ++i) {
  if (i % 10 === 0) {
    write(i + " is divisible by 10");
  } else if (i % 5 === 0) {
    write(i + " is divisible by 5");
  } else if (i % 41 === 0) {
    write(i + " is divisible by 41");
  }
}
