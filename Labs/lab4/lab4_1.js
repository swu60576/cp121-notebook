speed(10)

let len = 5;
let color = [green,blue,black,red];

for (let i = 0; i < 50; ++i) {
  fd(len);
  len += 5;
  rt(90);
  pen(color[i%4]);
  }