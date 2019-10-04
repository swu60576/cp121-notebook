## basics
> let เป็นหนึ่งในมาตรฐานของ javascript es6 [ศึกษาเพิ่มเติมได้ที่นี่](https://microbenz.in.th/%E0%B8%99%E0%B8%B5%E0%B9%88%E0%B8%9B%E0%B8%B5-2017-%E0%B9%81%E0%B8%A5%E0%B9%89%E0%B8%A7-%E0%B8%A1%E0%B8%B2%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%99-es6-%E0%B8%81%E0%B8%B1%E0%B8%99-9dede81e30da) <br/> เราจะพูดถึงเรื่องเบสิคสำคัญๆ สองเรื่อง ได้แก่ เรื่องของการประกาศตัวแปร กับ เรื่องของลำดับในการคำนวน เช่น

ทำไม
```javascript
let a = 5;
let b = 6;
let cSum = cSum + a + b;
```
ถึงเกิด error

และ 

ทำไม a กับ b ด้านล่างนี้ถึงไม่เท่ากัน
```javascript
let a = 1 / 5 * 2;
let b = ( 1 / 5 ) * 2;
print('a :' + a + ' b: ' + b); 
```
## declaration
> ทำไมถึงได้มี undefined error ขึ้นมากันนะ ?

คอมพิวเตอร์จะจำแค่สิ่งที่เราพิมพ์ลงไปเท่านั้นแหละ เช่น 
```javascript
let words = ['hello', 'world'];
print(word[1]);
```
เห็น error ใช่มั้ย :) 
เพราะงั้นอะไรที่คล้ายๆกันอย่าง `sum`, `Sum`, `t`, `T`, คอมพิวเตอร์ก็เห็นเป็นสิ่งที่ต่างกันหมด ([ยกเว้นในบางภาษา](https://en.wikipedia.org/wiki/Case_sensitivity))

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

อย่างอันนี้ก็จะได้ผลที่ต่างกันนะ
```javascript
let a;
let b;
print(a + b)

let a;
let b;
print(a + c)
```
ดังนั้นเเรื่องสำคัญของการประกาศตัวแปรหลักๆ ก็จะมีอย่าง
* ได้ error / ค่ามั่วออกมา -> declare / initialize ตัวแปรรึยังนะ ?
* ก็ initialize ตัวแปรไปแล้ว ทำไมมี error นะ :thinking: -> พิมพ์ชิ่อตัวแปรถูกมั้ย ?

ว่าแต่ ถ้างั้นแล้วทำไม
```javascript
let a = 5;
let b = 6;
let cSum = cSum + a + b;
```
ถึงเกิด error ล่ะ ` let cSum = cSum + a + b;` ไม่ใช่การประกาศตัวแปร `cSum` หรอ ?

ก็จะเข้าเรื่องที่สองของบทนี้แล้ว

## order of evaluation
> ถ้าจำได้ ตอนที่เรียนเลข ก็จะมีเรื่องอย่าง ต้องคิด คูณหาร ก่อน บวกลบ ซึ่งในการเขียนโปรแกรมก็มีอะไรอย่างนั้นเหมือนกัน <br />[อะไรอย่างนั้นที่ว่า](https://docs.microsoft.com/en-us/cpp/c-language/precedence-and-order-of-evaluation?view=vs-2019) <br />ถึงจะเป็นภาษา C แต่ภาษาต่างๆส่วนใหญ่ก็ยึดหลัก order of evaluation ตามนี้

> ไม่ได้อยากให้จำทั้งหมดได้ในตอนนี้ อยากให้รู้ว่าเรื่องแบบนี้มีด้วยไว้ก่อน

จากตารางใน link ข้างบน ก็มี 3 columns คือ 
* Symbols 
* Type of operation
* Associativity

เรื่องของตารางนี้ก็คือ 
* เรียงลำดับความสำคัญจากบนลงล่าง 
  - อยู่สูงกว่า -> คำนวณก่อน
* ถ้าอยู่ใน row เดียวกัน ให้ดูลำดับการคำนวณจาก columns Associativity


