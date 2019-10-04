let count = [0, 0, 0, 0, 0, 0];

for (let i = 0; i < 1000; ++i) {
  let r = random(1, 7);
  if (r === 1) {
    ++count[0];
  } else if (r === 2) {
    ++count[1];
  } else if (r === 3) {
    ++count[2];
  } else if (r === 4) {
    ++count[3];
  } else if (r === 5) {
    ++count[4];
  } else {
    ++count[5];
  }
}

for (let i = 0; i < count.length; ++i) {
  write(i + 1 + " = " + count[i] + " ครั้ง");
}
