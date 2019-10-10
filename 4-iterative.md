# Loops
ก็จะพูดถึง while loop และ for loop กัน ทั้งที่เราสามารถเปลี่ยนการทำงานจาก while loop <-> for loop ได้ แล้วทำไมเราถึงต้องเลือกใช้อันใดอันหนึ่งล่ะ ? <br >
## while loop และ for loop 
### โครงสร้างของ while loop
```javascript
while (condition) {
  // do this block if (condition == true)
}

//ก็อปได้ตั้งแต่ตรงนี้
//ex loop ที่สุ่มจนกว่า a จะเท่ากับ 7
//condition คือ a != 7 เพราะเราต้องการ loop ไปเรื่อยๆ จนกว่า a == 7

let a = random(1,8)
while (a != 7) {
  print(a)
  a = random(1,8)
}
print('a lucky ' + a)

```
เหมือนกับ `if (condition)` `condition` ของ `while (condition)` นี้ก็ควรเป็น[นิพจน์](https://github.com/swu60576/cp121-notebook/blob/master/1-data.md#%E0%B8%97%E0%B8%B3%E0%B9%84%E0%B8%A1%E0%B9%80%E0%B8%A3%E0%B8%B2%E0%B8%96%E0%B8%B6%E0%B8%87%E0%B8%95%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%84%E0%B8%B3%E0%B8%99%E0%B8%B6%E0%B8%87%E0%B9%80%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87-datatype-%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-)ที่มีค่าความจริงเหมือนกัน

### โครงสร้างของ for loop
```javascript
for(start; condition; step) {
  // do this block if (condition == true)
}

//ก็อปได้ตั้งแต่ตรงนี้
//ex loop เพื่อหา factorial
let a = 5

//loop นี้จะทำที่ i =  4, 3, 2 เพราะเราต้องการให้ได้ factorial 5 * 4 * 3 * 2
//start คือ let i = a - 1 เพราะเพรามี 5 (ตัวแรก) อยู่แล้ว และ a - 1 คือ ตัวที่สองที่เราอยากเอามาคูณกับตัวแรก
//condition คือ i >= 2 เพราะเราไม่ต้องการ i == 1 เพราะการคูณด้วย 1 ไม่มีความหมายอะไร 
//step คือ i-- เพราะเราต้องการ loop จาก 4 ไปจนถึง 2 

for (let i = a - 1; i >= 2; i--) {
a = a * i
}
print(a)

```

### การกำหนดจำนวนครั้งของ loop
สมมุติว่าเราต้องการ loop 5 ครั้ง โดยใช้ for loop เราสามารทำได้ (ที่นิยม) สองวิธี คือ
```javascript
//วิธีที่ 1
for (let i = 0; i < 5; i++) {
// do something
// ทำงานที่ i =  0, 1, 2, 3, 4  -> 5 ครั้ง
}

//วิธีที่ 2
for (let i = 1; i <= 5; i++) {
// do something
// ทำงานที่ i = 1, 2, 3, 4, 5  -> 5 ครั้ง
}
```
แบบแรกที่นิยมใช้กัน ก็เพราะ index ของ array เริ่มต้นด้วย 0 (ล่ะมั้ง ?) สรุปก็คือ ถ้าอยาก loop n ครั้ง <br >
* ใช้ `0`, (`<`, `>`), 'n`
* ใช้ `1', (`<=`, `=>`), `n`

## ควรใช้อะไรตอนไหน 
### อย่างที่เห็นว่าเราสามารถเปลี่ยนโปรแกรมในรูป while loop <-> for loop ได้ แต่สิ่งที่แตกต่างกันชัดเจนของทั้งสอง loop นี้คือ `scope`
```javascript
//while scope
let a = 0;
while (a < 5) {
++a;
}
print(a)

//for scope
for (let i = 0; i < 5; ++i) {
// do something
}
print(i)
```
จะเห็นว่าคอมฟ้องว่า ยังไม่ได้ประกาศ `i`  `<br >
ส่วนเรื่องกรณีไหนควรใช้อะไร ก็ลองสังเกตไปเรื่อยๆแล้วตัดสินด้วยตัวเองนะ 🙂

## เรื่องควรระวัง 
หลักๆ ปัญหาของการ loop ก็คือ
* loop ไม่เริ่ม
* loop จำนวนครั้งขาด, เกิน
* infinity loop 

### ของ while loop
เพราะว่าเวลาใช้ while loop เราไม่ได้กำหนด step ไวตั้งแต่แรก ก็เลยมีโอกาสมากที่เราจะทำให้ while กลายเป็น infinity loop เพราะไม่ได้อัพเดทค่า เช่น
```javascipt
let a = random(1,8)
while (a != 7) {
  print(a)
  // a = random(1,8) สมมุติว่าไม่มีบรรทัดนี้
  // เราไม่ได้ update a
  // a จะมีค่าเดิมตั้งแต่ที่กำหนดไว้ครั้งแรกตรง let a
  // ถ้า a ที่ถูกกำหนดไว้นั้นไม่ใช่ 7 -> เกิด inf loop
}
print('a lucky ' + a)
```

### ของ for loop
เพราะ for loop มักจะกำหนดตามจำนวนครั้งที่อยาก loop ปัญหาที่เกิดกับ for loop ส่วนใหญ่ก็เป็น loop จำนวนครั้งขาดๆเกินๆ  <br >
และเรามักใช้ for loop เพื่อเข้าถึงค่าใน array ถ้าหากเรากำหนด start, condition ผิด ก็มีสิทธิที่จะ loop เกิน index array ได้ เข่น
```javascript
let alpha = ['a', 'b', 'c', 'd']

//มีความเข้าใจผิดบางอย่างเกั่ยวกับจำนวนครั้งของ loop เกิดขึ้น
for (let i = 0; i < 5; i++) {
print(alpha[i])
}
//error เพราะไม่มี alpha[4]
```
อนึ่ง เวลา loop ใน array เราไม่ควรใช้เลขโดดๆอย่าง `5` แต่ควรใช้ `array.length` แทน เช่น ใช้ `i < alpha.length` เป็น condition แทน `i < 5`
เพื่อป้องกันการ loop เกิน index ของ array เช่น
```javascript

for (let i = 0; i < alpha.length; i++) {
print(alpha[i])

//เพราะ alpha.length = 4 ดังนั้น i < alpha.length มีความหมายเดียวกับ i < 4
//loop เริ่มที่ i =  0, 1, 2, 3
//ไม่เกิด error 
}
``` 
ซึ่งทำให้ใช้ `i <= array.length` ไม่ได้  เพราะ ... 
```javascript

for (let i = 0; i <= alpha.length; i++) {
print(alpha[i])

//เพราะ alpha.length = 4 ดังนั้น i <= alpha.length มีความหมายเดียวกับ i <= 4
//loop เริ่มที่ i =  0, 1, 2, 3, 4
//เข้าถึง alpha[4]
//loop เกิน index 
}
``` 

เรื่อง loopๆ ก็ประมาณนี้แหละ 
