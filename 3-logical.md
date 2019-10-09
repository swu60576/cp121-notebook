# if-else 
เรื่องสำคัญของ if-else ในตอนนี้ก็มี 
1. ใน `if (condition)` กับ `else if (condition)` condition (ควรจะ)ต้องเป็น[นิพจน์](https://github.com/swu60576/cp121-notebook/blob/master/1-data.md#%E0%B8%97%E0%B8%B3%E0%B9%84%E0%B8%A1%E0%B9%80%E0%B8%A3%E0%B8%B2%E0%B8%96%E0%B8%B6%E0%B8%87%E0%B8%95%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%84%E0%B8%B3%E0%B8%99%E0%B8%B6%E0%B8%87%E0%B9%80%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87-datatype-%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-)คืนค่าความจริง (boolean) (เป็นจริง/เท็จ) เท่านั้นๆๆๆๆ [เรื่องนิพจน์]
2. ใน  
    ```javascript
    if (condition1) {
      //block1
    } else if (condition2) {
      //block2
    } else {
      //block3
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
