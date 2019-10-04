speed(10);
pen(purple, 2);

let color = [red, green, blue];
for (let i = 0; i < 3; ++i) {
  pen(color[i % 3]);
  for (let j = 0; j < 4; ++j) {
    fd(100);
    rt(90);
  }
  for (let j = 0; j < 4; ++j) {
    lt(90);
    fd(100);
  }
  rt(60);
}
