speed(20);

pen(green,2);

let stack = [];
for (let i = 0; i < 10; ++i) {
  let x = random()*360
  rt(x);
  fd(25);
  stack.push(x);
  stack.push(25);
}

pen(red,2);
while (stack.length > 0) {
  bk(stack.pop());
  lt(stack.pop());
  }
