wear(yellow);
t = new Turtle(red);
t.moveto(250, 300);

pen(green, 1);

keydown("left", function() {
  lt(90);
  fd(25);
});

keydown("right", function() {
  rt(90);
  fd(25);
});

keydown("up", function() {
  fd(25);
});
