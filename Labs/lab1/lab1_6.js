t = new Turtle(red);
t.moveto(250, 300);
pen(blueviolet, 1);

//algorithm 1
let count = 0;
for (let i = 0; i < 12; ++i) {
  fd(25);
  ++count;
  write("forward" + " " + count);
}
rt(90);
++count;
write("right turn" + " " + count);
for (let i = 0; i < 10; ++i) {
  fd(25);
  ++count;
  write("forward" + " " + count);
}

//algorithm 2
let count = 0;
for (let i = 0; i < 10; ++i) {
  rt(90);
  ++count;
  write("right turn" + " " + count);
  fd(25);
  ++count;
  write("forward" + " " + count);
  lt(90);
  ++count;
  write("left turn" + " " + count);
  fd(25);
  ++count;
  write("forward" + " " + count);
}
fd(25);
++count;
write("forward" + " " + count);
fd(25);
++count;
write("forward" + " " + count);

//algorithm 3
let count = 0;
rt(90);
++count;
write("right turn" + " " + count);
for (let i = 0; i < 10; ++i) {
  fd(25);
  ++count;
  write("forward" + " " + count);
}
lt(90);
++count;
write("left turn" + " " + count);
for (let i = 0; i < 12; ++i) {
  fd(25);
  ++count;
  write("forward" + " " + count);
}
