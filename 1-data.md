# Datatype and Operators 
สิ่งที่เราเขียนไป มันได้อะไรออกมา 

## Datatypes and Operators
จะเขียนถึง datatype หลักๆ ที่เราเคยเจอกันไป ในขอบเขตของภาษา javscript นะ 
ซึ่งก็จะมี 
* primitive
  * boolean
    - ค่าความจริง `true`, `false`
  * number
    - เลขจำนวนเต็มและทศนิยม เช่น `-1`, `0`, `1`, `2.5`
    - ในภาษาอื่นๆมักจะแบ่งสองอันนี้เป็น int/long (เลขจำนวนเต็ม), float/double (ทศนิยม)
  * string 
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
  * อย่างที่เราเคยใช้ `t = new Turtle()` ตอนที่สร้างเต่าซึ่งหมายถึงเรากำหนดให้ตัวแปร `t` เป็น object คลาส `Turtle`
  
```javascript
let a = true
let b = 5
let c = 'hello'
let t = new Turtle()
print('typeof a:' + typeof(a))
print('typeof b:' + typeof(b))
print('typeof c:' + typeof(c))
print('typeof t:' + typeof(t))
```


### ทำไมเราถึงต้องคำนึงเรื่อง datatype ด้วย ?
ในการสื่อสารกับคน สมมุติว่าเป็นภาษาอังกฤษแล้วกัน หลายครั้งที่ต่อสื่อสารผิดแกรมม่าไป เราก็ยังสื่อสารกันเข้าใจได้ ถ้าสิ่งที่เราสื่อออกไปมีึความหมายที่เข้าใจได้ 
แต่ในการเขียนโปรแกรม ซึ่งก็เป็นการสื่อสารกับคอมพิวเตอร์แหละ ต่อให้ถ้าเราอ่านโค้ดแล้วรู้เรื่องว่าเราต้องการเขียนอะไร แต่ถ้าเขียนผิด syntax หรือเขียนในสิ่งที่คอมพิวเตอ์ไม่เข้าใจขึ้นมา เช่น
```javascript
let a = 'hello world'
let b = 5
print(a + b)
print(b + a)
print(a - b)
print(b - a)
```
จะเห็นว่า `a + b`, `b + a` print ค่าออกมาได้ แต่ `a - b`, `b - a` print ค่าออกมาเป็น `NaN` ก็เพราะ คอมพิวเตอร์(ในภาษา js) นั้น
* เข้าใจว่า string + number หมายถึงอะไร (เอา string ต่อด้วย number)
* เข้าใจว่า number + string หมายถึงอะไร (เอา number ต่อด้วย string)
* ไม่เข้าใจว่า string - number หมายถึงอะไร
* ไม่เข้าใจว่า number - string  หมายถึงอะไร

ซึ่งอะไรอย่าง `a + b` นี่เราเรียกมันว่า นิพจน์ (expression) และ อะไรอย่าง `b = 5` ก็คือ ประพจน์ (statement) ไม่จำเป็นต้องจำหรอก จะเรียกมันว่าก้อนๆ ก็ได้ 
<br />แต่ประเด็นก็คือ ถ้านิพจน์ไม่มีความหมาย ประพจน์ก็จะไม่มีความหมาย และตัวแปรก็จะมีค่าเป็นอะไรก็ไม่รู้ (อาจเป็น NaN, null หรือค่าที่เราไม่ต้องการก็ได้) 
เช่น
```javascript
//a, b จากข้างบน
let c = a + b 
let d = a - b
```
`c` จะมีค่าที่เราต้องการเพราะ `a + b` เป็นนิพจน์ที่ค่าคือ `hello world5` และมี type เป็น string ส่วน `d` มีค่าเป็น `NaN` เพราะ `a - b` เป็นนิพจน์ที่ไม่มีความหมาย 
### แล้วอะไรคือตัวกำหนดว่านิพจน์นั้นมีความหมายล่ะ ?
จาก `a + b` ที่เราเรียกมันว่านิพจน์ เราเรียก `a`, `b` ว่า operand และ `+` ว่า operator <br />
สิ่งที่กำหนดว่านิพจน์มีความหมายหรือไม่มีความหมายก็คือความเข้ากันของ dataype ของ operand และ operator <br />
เราจัก datatype กันไปแล้ว มารู้จัก operator กันต่อ operator ซึ่งก็นั่นแหละ จะยกอะไรหลักๆที่เราเคยเจอมาพูดถึงกันในขอบเขตของภาษา js
* arithmetic operators
  * อย่างเช่น `+`, `-`, `*`, `/`, `%`
* comparator (relational และ equality) operators
  * relational ก็ `>`, `>=`, `<`, `<=`
  * equality ก็ `==`, `!=`
* logical operators
  * อย่างเช่น `&&`, `||`
  
ที่ผ่านๆมา ที่เราเขียนกันบ่อยๆก็จะแบบ 
* เอา number บวกลบคูณหารกัน 
* เอา string + number เพื่อสร้างเป็นประโยค
* เอา number มาเปรัยบเทียบกับเพื่อหาว่า มากกว่า เท่ากับ หรืออะไรก็ตาม 

จากที่เคยทำก็จะเห็นว่า ถ้า 
* เอา `number (+, -, *, /) number`  นิพจน์นั้นก็จะมี type เป็น number ค่าก็พวกตัวเลข
  * ``
* เอา `string + number` (หรือสลับที่กัน) นิพิจน์นั้นก็จะมี type เป็น string ค่าก็พวกตัวอักษร
  * `
* เอา `number (>, <, <=, =>, ==, !=) number` นิพิจน์นั้นก็จะมี type เป็น boolean (`true`, `false`) ค่าก็พวก จริง, เท็จ
  * ``
* เอา `boolean (&&, ||) boolean` นิพิจน์นั้นก็จะมีค่าเป็นค่าความจริง และมี type เป็น boolean (`true`, `false`)

```javascript
//ตัวอย่างนิพจน์ที่มีความหมาย
print(5 - 2)
print(typeof(5 - 2))
print('hello ' + 555)
print(typeof('hello ' + 555))
print(5 > 3)
print(typeof(5 > 3))
print(6 < 2)
print(typeof(6 < 2))
print(5 > 3 && 6 < 2)
print(typeof(5 > 3 && 6 < 2))
//ลองคิดลำดับการคำนวณของ 5 > 3 && 6 < 2 ดูนะ

//ตัวอย่างนิพจน์ที่ไม่มีความหมาย
print('hello' - 5)
print(typeof('hello' - 5))
print('hello' % 10)
print(typeof('hello' % 10))
print('hello' * '5')
print(typeof('hello' * '5'))
```

ข้างบนคือตัวอย่างของกรณีที่ datatype ของ operand และ operator เข้ากัน (ไม่เข้ากันก็อย่าง `string - number`) <br />
ไม่ต้องจำก็แต่ แต่พยายามคิดอยู่เสมอว่า เราเอาตัวแปรอะไรมาทำอะไรกัน นิพจน์ของเรามีค่าเป็นอะไร มีไทป์เป็นอะไร สิ่งที่ต้องระวังก็คือ นิพจน์ให้ค่าที่เราต้องการ ไทป์ที่หรือเปล่า เพราะอย่าง
```javascript
if(condition) {

} else {

}
/// เพื่อให้ if block ทำงาน condition นี้ต้องเป็นนิพจน์ที่มี type เป็น boolean (ซึ่งมีค่าเป็น จริง/เท็จ) 
/// ✅ condition: x > 5, y == 2 (นิพจน์ที่มี type เป็น boolean)
/// 🚫 condition: y + 5, 10 % 5 (นิพจน์ที่ type ไม่ใช่ boolean)

```
สิ่งที่ advance ขึ้นไปก็จะเป็น การเทียบค่าระหว่างตัวแปร เช่น number `0` ถือเป็น boolean `false`, Number `เลขใดๆที่ไม่ใช่ศูนย์` ถือเป็น boolean `true` ซึ่งคงไม่ใช่เรื่องสำคัญในตอนนี้เท่าไหร่ ถ้าสนใจก็ลองหาอ่านต่อดูนะ ก็จะจบส่วนของ data types และ operators ไว้เท่านี้แหละ 

## Array
ความเป็น array ก็จะต่างกันไปในแต่ละ programming language ล่ะนะ แต่หลักๆที่ล้วนเหมือนกันก็คือ สามารถเข้าถึงค่าของ array ได้ด้วย index 
นึกภาพว่า array เป็นตู้ที่มีลิ้นชัก โดยเริ่มที่ลิ้นชักที่ 0 ถึง n-1 (n คือจำนวนลิ้นชัก หรือขนาดของ array) แล้วถ้าเราอยากจะได้ข้อมูลของลิ้นชักไหน ก็ต้องใช้ `ชื่ออาเรย์[ลิ้นชักที่]` <br />
เรื่องที่ต้องระวังของ array ตอนนี้ก็คือ 
* เข้าถึง array ถูก index มั้ย
* loop เลย index หรือเปล่า
เช่น 
```javascript
a = [2, 1 , 4, 6]
for (var i = 0; i < 5; i++) {
print(a[i] + 1)
}
// เข้าถึง a[4] ซึ่งไม่ได้ถูกประกาศไว้ 
```
array ของ js ตอนนี้ก็ไม่มีอะไรมาก ระวังสองเรื่องหลักๆข้างบน (ถ้าเจอ array ของภาษาอื่นๆก็จะยุ่งยากกว่านี้นะ 🙂) 

## Object 
เราจะพยายามเข้าใจ object เท่าที่เราได้เจอมากันก็แล้วกันนะ <br >
ใน lab เราเคยเห็นอะไรอย่าง `t = new Turtle()` ซึ่งเป็นการกำหนดตัวแปร t ให้เป็น type object class Turtle ซี่ง ความหมายของการเป็น object class Turtle (อย่างคร่าวๆก็คือ) เราสามารถทำอะไรกับตัวแปร t ได้มากกว่า ตัวแปรประเภท primitive ได้ตามที่ class ของมัน (ซึ่งคือ Turtle) กำหนดไว้
เช่น 
```javascript
let a = 5
let b = new Turtle()
let pikachuu = {
 //name is pikachuu's attribute
 name: 'pikachu',   
 ulti: function(elect) {
    print('release ' + elect + ' volt')
  }
//ulti is pikachuu's function
}

print(typeof(a))
a = a.toString()
print('typeof a: ' + typeof(a))

print('typeof b: ' + typeof(b))
b.pen(green)

print('typeof pikachuu: ' + typeof(pikachuu))
print(pikachuu.name)
pikachuu.ulti(100)

```
ก็คือ `a` เป็นตัวแปร primitive number ธรรมดา `b` เป็น object class Turtle และ`pikachuu` เป็น object ที่เรากำหนดขึ้นมาเองโดยไม่ได้กำหนด class
ซึ่งจะเห็นว่าเราสามารถทำอะไรกับตัวแปร `a`, `b`, `pikachuu` ได้ต่างกัน โดยใช้ `.` dot operator 
* `.` dot operator
  * เรากำลังจะ
    - `variable.attribute` เข้าถึง attribute ของตัวแปร
    - `variable.function()` เรียกใช้ function ของตัวแปร
 
จากทั้งสามตัวแปร จะสังเกตว่า
* เราสามารถใช้ function `toString()` กับ `a` ซึ่งเป็น number ได้ แต่ใช้กับ `b`, `pikachuu` ที่ไม่ใช่ number ไม่ได้ (เพราะไม่ได้ถูกกำหนดไว้)
  * `number.toString()` หมายถึง เปลี่ยน type ของ ตัวแปร number ให้เป็น string
* เราสามารถใช้ function `pen(color)` กับ `b` ซึ่งเป็น object class Turtle ได้ (เพราะคลาสเค้ากำหนดมาแบบนี้ เหมือนที่เราใช้ `ulti()` กับ `pikachuu` ได้)
แต่ใช้กับ `a`, `pikachuu` ที่ไม่ใช่ object class Turtle  ไม่ได้ (เพราะไม่ได้ถูกกำหนดไว้)
  * `Turtle.pen(color)` หมายถึง เปลี่ยนสีปากกาของเต่า (object class Turtle) ให้เป็นสี `color`
* กับตัวแปร `pikachuu` ที่เรากำหนดขึ้นมาเองโดดๆ (นี่ไม่ใช่คลาส pikachuu นะ) เราสามารถ
  * `pikachuu.name` : เพื่อเข้าถึงชื่อ attribute name ของตัวแปร pikachuu ตามที่เรากำหนดไว้ได้
  * `pikachuu.ulti(elect)` : ใช้ function `ulti(elect)` ของตัวแปร pikachuu ตามที่เรากำหนดไว้ได้
  * แน่นอนว่า number และ object class Turtle ทำทั้งสองอย่างข้างบนไม่ได้ เพราะไม่ได้ถูกกำหนดไว้
  
เรื่องของ object ก็ประมาณนี้ เป็น datatype ประเภทหนึ่ง ซึ่งไม่ใช่ primitive เป็นเหมือนกับ datatype ที่เรากำหนดขึ้นมาเอง แน่นอนว่าอะไรอย่าง `b + pikachuu` คงไม่ได้ให้ค่าอะไรที่เราต้องการแน่ๆ <br ><br >
เรืองของการใช้ object นั้น มองว่าที่มี object ขึ้นมาก็เพื่อให้ทำอะไรได้สะดวกขึ้น สมมุติว่า ถ้าเราอยากเก็บข้อมูลนักเรียนคนหนึ่งโดยใช้ array กับ ใช้ object
```javascript
//array way
let bob = [
          'bob',
           61234,
           3.45
          ]
// s1 เป็น array ที่เก็บข้อมูลของนักเรียนชื่อ bob รหัส 61234 เกรด 3.45 ถ้าอยากเข้าถึงข้อมูลของ bob
print(bob[0]) // print ชื่อของ bob
print(bob[1]) // print รหัสของ bob
print(bob[2]) // print เกรดของ bob

//object way
let alice = {
          name: 'alice',
          id: '61567',
          grade: 3.54
          }
// alice เป็น object ที่เก็บข้อมูลของนักเรียนชื่อ alice รหัส 61567 เกรด 3.54 ถ้าอยากเข้าถึงข้อมูลของ alice
print(alice.name) // print ชื่อของ alice
print(alice.id) // print รหัสของ alice
print(alice.grade) // print เกรดของ alice
```

ก็จะรู้สึกว่าใช้ object แล้วอ่านเข้าใจมากกว่าล่ะนะ

เรื่องของบทนี้ก็ประมาณนี้ล่ะนะ 
