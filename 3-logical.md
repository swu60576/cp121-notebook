# if-else 
เรื่องสำคัญของ if-else ในตอนนี้มีอยู่สองเรื่อง -
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
```
นั้น ตอนตัดสิน if else จะเลือกเข้า block ใด block หนึ่งเท่านั้น 
