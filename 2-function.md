# Function
นอกจากโครงสร้างของ function แล้ว เรื่องของ function ก็จะมีอยู่สามเรื่องคือ 
* no return function
* return function
* recursive function 

## โครงสร้างของ function

* parameter และ argument
    * paremeter เป็นตัวบอกว่า เราต้องการรับอะไรมาใช้ใน function บ้าง
    * argument คือสิ่งที่เราส่งเข้าไปเพื่อใช้มันใน function 

```javascript
function no_return_name(parameter) {
  print(parameter)
}
no_return_name('hello world')

//'hello world' เป็น arguemnt ของ function no_return_name

function return_name(parameter) {
  return parameter 
}
return_name('hello world')

//'hello world' เป็น arguemnt ของ function return_name
```
จะเห็นว่ามัน print ออกมาแค่ครั้งเดียว ทั้งที่เราเรียกใช้ทั้ง function no_return_name และ return_name
ต่อไปจะเป็นความต่างของ no return และ return function 
```javascript
//วางโค้ดต่อจากข้างบน
let a = no_return_name('hello world')
let b = return_name('hello world')
print('a: ' + a)
print('type a:' + typeof(a))
print('b: ' + b)
print('type b:' + typeof(b))

//หรือเราจะทำแบบนี้ก็ได้ 
print(return_name('แบบนี้ก็ได้'))
```
