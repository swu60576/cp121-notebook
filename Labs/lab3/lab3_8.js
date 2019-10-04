// (1/w) = R * (1/(n*n) - 1/(m*m))

//8.1 n = 10, m = 20, R = 5, find w
// use w = 1 / ( R * ( 1/(n*n) - 1/(m*m)))

let n = 10;
let m = 20;
let R = 5;

let w = 1 / (5 * (1 / (n * n) - 1 / (m * m)));
write(w);

//8.2 n = 10, m = 20, w = 25, find R
// use R = (1/(n*n) - 1/(m*m))/w

w = 25;
R = (1 / (n * n) - 1 / (m * m)) / w;
write(R);
