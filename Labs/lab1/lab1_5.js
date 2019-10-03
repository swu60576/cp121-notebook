pen(red, 5);
readnum("value x", function(x) {
  let Value = 2 * 360;
  for (let i = 0; i < x; ++i) {
    fd(100);
    rt(Value / x);
  }
});
