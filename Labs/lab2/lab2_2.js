// แปลงสูตรให้อยู่ในรูป statement
// 1. v = u + a*t
// 2. v^2 = u*u + 2*a*s
// 3. s = u*t + (1/2)*(a*t*t)

//2.1 u = 20, a = 10, t = 5, find v
let u = 20;
let a = 10;
let t = 5;
let v = u + a * t;
write(v);

//2.2 u = 20, a = 10, s = 25, find v
u = 20;
a = 10;
let s = 25;
let vv = u * u + 2 * a * s;
vv = sqrt(vv);

write(vv);

//2.3 t = 5, a = 10, s = 25, find u
// transform สูตร
// -ut = 1/2*(a*t*t) - s
// -u = (1/2 * (a*t*t) -s)/t
// u = -1 * ((1/2 * (a*t*t) -s)/t)

t = 5;
a = 10;
s = 25;

u = -1 * (((1 / 2) * (a * t * t) - s) / t);
write(u);
