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
    //ตอนตัดสิน if else จะเลือกเข้า block ใด block หนึ่งเท่านั้น 
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
ในการเปรียบเทียบตัวเลข เราสามารถใช้เครื่องหมายเปรียบเทียบอย่าง 
* relational 
    * `<`, `>`, `<=`, `>=`, 
* equilty
    * `==`, `!=` 
ได้ทั้งหมด แต่ถ้าเป็น string การใช้ relational กับ equilty จะเป็นการเปรียบเทียบที่ต่างกัน เช่น 
```javascript
let word1 = 'snow'
let word2 = 'rain'

if (word1 == 'snow') {
print('snowing ==')
} else {
print('not snowing ==')
}

if (word2 == 'snow') {
print('snowing ==')
} else {
print('not snowing 1 ==')
}


if (word1 <= 'snow') {
print('snowing 2 <=')
} else {
print('not snowing 1 <=')
}

if (word2 >= 'snow') {
print('snowing >= 1')
} else {
print('not snowing >= 1')
}
```
