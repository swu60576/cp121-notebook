hide();
T = [];
c = [red, green, blue, black, yellow, pink, purple, orange];

for (i = 0; i < c.length; ++i) {
  color = c[i];
  t = new Turtle(color);
  t.moveto(random(-200, 201), random(-200, 201));
  t.pen(color);
  T.push(t);
}

forever(1, function() {
  x = random() * 360;
  T[i % 8].rt(x);
  T[i % 8].fd(25);
  i += 1;
});
