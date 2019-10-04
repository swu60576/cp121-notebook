a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
b = [[10, 20, 30], [40, 50, 60], [70, 80, 90]];
c = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
i = 0;
j = 0;

for (i = 0; i < a.length; i++) {
  for (j = 0; j < a[0].length; j++) {
    sumx = 0;
    for (k = 0; k < c.length; k++) {
      sumx += a[i][k] * b[k][j];
      //print(a[i][k] + "*" + b[k][j]  + " * " + sumx);
    }
    c[i][j] = sumx;
  }
}

for (i = 0; i < 3; i++) {
  for (j = 0; j < 3; j++) {
    type(c[i][j] + " ");
  }
  typeline();
}
