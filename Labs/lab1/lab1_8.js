let sum = 0;

readnum("readx", function(x) {
  readnum("ready", function(y) {
    for (let i = x; i <= y; ++i) {
      sum += i;
    }
    write(sum);
  });
});
