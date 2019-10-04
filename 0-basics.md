## basics
> เราจะพูดถึงเรื่องเบสิคสำคัญๆ สองเรื่อง ได้แก่ เรื่องของการประกาศตัวแปร กับ เรื่องของลำดับในการคำนวน เช่น

ทำไม
```javascript
a = 5;
b = 6;
cSum = cSum + a + b;
```
ถึงเกิด error

และ 

ทำไม a กับ b ด้านล่างนี้ถึงไม่เท่ากัน
```javascript
a = 1 / 5 * 2;
b = ( 1 / 5 ) * 2;
print('a :' + a + ' b: ' + b); 
```
## declaration
> ทำไมถึงได้มี undefined error ขึ้นมากันนะ ?

คอมพิวเตอร์จะจำแค่สิ่งที่เราพิมพ์ลงไปเท่านั้นแหละ เช่น 
```javascript
words = ['hello', 'world'];
print(word[1]);
```
เห็น error ใช่มั้ย :) 

หลักๆ สถานะของตัวแปรก็จะมี 3 แบบ (ชื่อเรียกอาจต่างกันไปในแต่ละภาษา) คือ
* undeclared
  - ยังไม่ได้ประกาศ
* declared ( uninitialized , auto initialized)
  - ประกาศแล้วแต่ ยังไม่ได้กำหนดค่า , ถูกกำหนดค่ามาให้อัตโนมัติ
* initialized 
  - กำหนดค่าให้ตัวแปรเรียบร้อย

```javascript
let a; 
// a is declared

let b = 5; 
// b is intialized

print(c)
// c is undeclared -> error
```
