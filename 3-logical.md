# if-else 
เรื่องสำคัญของ if-else ในตอนนี้ก็มี 
1. ใน `if (condition)` กับ `else if (condition)` condition (ควรจะ)ต้องเป็น[นิพจน์](https://github.com/swu60576/cp121-notebook/blob/master/1-data.md#%E0%B8%97%E0%B8%B3%E0%B9%84%E0%B8%A1%E0%B9%80%E0%B8%A3%E0%B8%B2%E0%B8%96%E0%B8%B6%E0%B8%87%E0%B8%95%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%84%E0%B8%B3%E0%B8%99%E0%B8%B6%E0%B8%87%E0%B9%80%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87-datatype-%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-)คืนค่าความจริง (boolean) (เป็นจริง/เท็จ) เท่านั้นๆๆๆๆ 
2. ใน  
    ```javascript
    if (condition1) {
      //condition1 true enter this block
    } else if (condition2) {
      //condition2 true enter this block
    } else {
      //else enter this block
    }
    //จะเข้า block แรก ที่ condition เป็นจริง เพียง block เดียวเท่านั้น
    ```
3. การใช้ `&&` กับ `||` ในการเชื่อม condition 

## 1. condition ควรจะเป็น นิพจน์ที่มีค่าความจริง
อย่างเช่น 
```javascript
let a = 4
let b = 3
if (a < b) {
    print(a + ' น้อยกว่า ' + b)
} else if (a == b) {
    print(a + ' เท่ากับ ' + b)
} else {
    print(a + ' มากกว่า ' + b)
}
```
แต่ถ้าเป็น string ต้องระวัง เพราะการใช้ การใช้เครื่องหมายเปรียบเทียบอาจมีความหมายต่างกัน 
```javascript
let word1 = 'snow'
let word2 = 'sunny'

if (word1 == 'snow') {
print('0 snowing == ')
} else {
print('0 not snowing ==')
}

if (word2 == 'snow') {
print('1 snowing ==')
} else {
print('1 not snowing ==')
}


if (word1 > 'snow') {
print('2 snowing >')
} else {
print('2 not snowing > ')
}

if (word2 > 'snow') {
print('3 snowing >')
} else {
print('3 not snowing >')
}
```
ก็คือ นิพจน์ `string1 < string2`, `string1 > string2` เป็นการเทียบว่า จำนวนตัวอักษร (`string.length`) อันไหนมากกว่ากัน ไม่ใช่การเปรียบเทียบว่า เป็นคำที่เหมือนกัน หรือไม่เหมือนกัน แบบ `string1 == string2` , `string1 != string2`

## 2. การเลือกเข้า block ใด block หนึ่งเพียงอย่างเดียว
ตัวอย่างจาก lab ซัก lab ที่เป็นประมาณนี้
```javascript
// x % y หมายถึง การหาว่า x หารด้วย y มีเศษเป็นอะไร
for (let i = 1; i <= 100; i++) {
    if (i % 5 == 0) {
        print(i + ' is divided by 5')
    } else if (i % 10 == 0) {
        print(i + ' is divided by 10')
    } else if (i % 40 == 0) {
        print(i + ' is divided by 40')
    }
}
```
โค้ดข้างบนมีปัญหาเพราะ ไม่ว่าจะเป็นเลขที่หารด้วย 40 หรือ 10 ลงตัวนั้น 5 ก็จะหารมันลงตัวด้วย <br > 
และเมื่อ 5 หารมันลงตัวด้วย ก็จะเข้ากับข้อที่ 2 ของเรา if block จะทำ block แรกที่เป็นจริงเพียง block เดียวเท่านั้น <br >
ถ้างั้นลองสลับ 10 กับ 5
```javascript
// x % y หมายถึง การหาว่า x หารด้วย y มีเศษเป็นอะไร
for (let i = 1; i <= 100; i++) {
    if (i % 10 == 0) {
        print(i + ' is divided by 10')
    } else if (i % 5 == 0) {
        print(i + ' is divided by 5')
    } else if (i % 40 == 0) {
        print(i + ' is divided by 40')
    }
}
```
จะเห็นว่าเลขที่หารด้วยทั้ง 10 และ 5 ลงตัว จะ print 10 ออกมา เพราะมันเข้า block `if (i % 10 == 0) { บล็อกนี้ }` block เดียวเท่านั้น <br > 
ดังนั้นเพื่อให้ผลออกมาเป็นแบบที่ต้องการ เราควรเรียงลำดับ condition เป็น 40, 10, 5 
```javascript
// x % y หมายถึง การหาว่า x หารด้วย y มีเศษเป็นอะไร
for (let i = 1; i <= 100; i++) {
    if (i % 40 == 0) {
        print(i + ' is divided by 40')
    } else if (i % 10 == 0) {
        print(i + ' is divided by 10')
    } else if (i % 5 == 0) {
        print(i + ' is divided by 5')
    }
}
```
## 3. การใช้ `&&` , `||` เชื่อมนิพจน์
ลดการใช้ nested if ด้วย การเชื่อมนิพจน์โดนใช้ `&&`, `||`  <br >
อย่างเช่น ถ้าต้องการหาเลขที่ มากกว่าหรือเท่ากับ 5 แต่น้อยกว่าหรือเท่ากับ 8 ก็สามารถทำทำทั้งสองวิธีนี้
```javascript
//ทางที่ 1
for (let i = 1; i <= 10; i++) {
    if (i >= 5) {
        if (i <= 8) {
          print('5 <= ' + i + ' <= 8')
        } else {
          print('no')
          }
    } else {
      print('no')
    }
}

//ทางที่ 2
for (let i = 1; i <= 10; i++) {
    if ((i >= 5) && (i <= 8)) {
        print('5 <= ' + i + ' <= 8')
    } else {
        print('no')
    }
}
```
ตัวอย่างที่สอง (อาจจะ advance ขึ้นอีกนิด ลองคิดตามแต่ละนิพจน์ดูว่าให้ผลเป็นอะไร ลำดับการคิดก็ตาม [order](https://docs.microsoft.com/en-us/cpp/c-language/precedence-and-order-of-evaluation?view=vs-2019) เลย) เป็น pseudocode ที่ให้เงื่อนไขมาเป็น <br />
* ถ้าฝนตกหนัก -> รอ
* ถ้าฝนตกเบา -> กางร่ม
* ถ้าแดดออกหนัก -> กางร่ม
* ถ้าแดดออกเบา -> เดินเล่น
จาก pseudocode ข้างบน เราสามารถทำอะไรแบบนี้ได้
```javascript
let weather = 'แดดออก'
let degree = 'หนัก'
let doing = ''

if ((weather == 'ฝนตก' && degree == 'เบา') || (weather == 'แดดออก' && degree == 'หนัก')) {
    doing = 'กางร่ม'
} else if ( weather == 'ฝนตก' && degree == 'หนัก') {
    doing = 'รอ' 
} else {
    doing = 'เดินเล่น'
}

print(doing)

```
คิดว่าอาจารย์เขาคงไม่ออกอะไรขนาดนี้หรอก เพราะงั้นก็ทิ้งไว้ให้ลองคิด / เปลี่ยนตัวแปรเล่นดูนะ 🙃
ใน if - else ก็น่าจะมีอะไรเท่านี้แหละ 
