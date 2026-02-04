let score=0;
console.log(score||100)
// These all are valid variables 
let x=2;
let _x=3
let $=4
let $$$='$'
console.log(x)
console.log(_x)
console.log($)
console.log($$$)
let a,b,c=10  // wrong way to assign value to multiple variables
let a1=10 , b1=20 , c1=30; // correct way to assign value to multiple variables
console.log(a)
console.log(b)
console.log(c)

let a2='Hello'
let a3="Hello"
console.log(a2)
console.log(a3)
console.log(`This is string`)

let text=`We are the so called "vikings " from North`
console.log(text)
console.log(text.length)
console.log("We are the so called \"Vikings\"")
let price=10
let vat=0.25
let total=`Total: ${(price * (1+vat)).toFixed(2)}`
console.log(total)