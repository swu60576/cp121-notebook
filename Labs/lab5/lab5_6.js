let prop = [1 / 7, 1 / 7, 2 / 7, 1 / 7, 1 / 7, 1 / 7];
let count = [0, 0, 0, 0, 0, 0];

for (let i = 0; i < 1000; ++i) {
  let r = random(1, 8);
  if (r == 1) {
    ++count[0];
  } else if (r == 2) {
    ++count[1];
  } else if (r == 4) {
    ++count[3];
  } else if (r == 5) {
    ++count[4];
  } else if (r == 6) {
    ++count[5];
  } else {
    ++count[2];
  }
}

for (let i = 0; i < prop.length; ++i) {
  write("propability for " + (i + 1) + " = " + prop[i]);
}
for (let i = 0; i < count.length; ++i) {
  write(i + 1 + " = " + count[i] + " ครั้ง");
}
