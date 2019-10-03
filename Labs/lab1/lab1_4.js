pen(red, 1);
let len = 200;
for (let i = 0; i < 4; ++i) {
  jump(25, 25);
  for (let j = 0; j < 4; ++j) {
    fd(len);
    rt(90);
  }
  len -= 50;
}
