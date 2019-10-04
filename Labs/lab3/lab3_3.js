for (let i = 1; i <= 50; ++i) {
  if (i % 5 === 0 && i % 10 === 0 && i % 40 === 0) {
    write(i + " is divisible by 40,10 and 5");
  } else if (i % 5 === 0 && i % 10 === 0) {
    write(i + " is divisible by 10 and 5");
  } else if (i % 5 === 0) {
    write(i + " is divisible by 5");
  }
}
