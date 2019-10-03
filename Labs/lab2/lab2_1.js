readnum("point", function(point) {
  if (point >= 80) {
    write("A");
  } else if (point >= 70 && point < 80) {
    write("B");
  } else if (point >= 60 && point < 70) {
    write("C");
  } else {
    write("it is not a valid input");
  }
});
