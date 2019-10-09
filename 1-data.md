# Datatype and Operators 
สิ่งที่เราเขียนไป มันได้อะไรออกมา 

## Datatypes
จะเขียนถึง datatype หลักๆ ที่เราเคยเจอกันไป ในขอบเขตของภาษา javscript นะ 
ซึ่งก็จะมี 
* primitive
  * boolean
    - ค่าความจริง `true`, `false`
  * number
    - เลขจำนวนเต็มและทศนิยม เช่น `-1`, `0`, `1`, `2.5`
    - ในภาษาอื่นๆมักจะแบ่งสองอันนี้เป็น int/long (เลขจำนวนเต็ม), float/double (ทศนิยม)
  * String 
    - ตัวอักษร เช่น `'a'`, `'hello world'` 
  * NaN 
    - ไม่ใช่ตัวเลข 
* data structure 
  * array
    - ถึงแม้ว่าใน js ถ้าเราทำแบบนี้
    ```javascript
    let a = [1,2,3]
    print(typeof(a))
    //object 
    //แต่เราจะศึกษาในความเป็น array ของมันอยู่
    ```
* object 
