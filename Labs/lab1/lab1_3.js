pen(red, 1);
let len = 50;
for (let i = 0; i < 3; ++i) {
  for (let j = 0; j < 4; ++j) {
    fd(len);
    rt(90);
  }
  len *= 2;
}
