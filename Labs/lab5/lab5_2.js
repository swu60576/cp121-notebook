speed(25);

moveto(150, 150);
pen(purple, 2);

for (let i = 0; i < 4; ++i) {
  lt(90);
  fd(300);
}
hide();

b = new Turtle(blue);
b.pen(blue);

forever(1, function() {
  x = random(360);
  a = b.getxy();
  d = b.direction();
  if (
    a[0] + 25 >= 150 ||
    a[0] - 25 <= -150 ||
    a[1] + 25 >= 150 ||
    a[1] - 25 <= -150
  ) {
    b.lt(180);
    b.fd(25);
    write("direction: " + d);
    write("x: " + a[0] + " y: " + a[1]);
  } else {
    b.lt(x);
    b.fd(25);
  }
});
