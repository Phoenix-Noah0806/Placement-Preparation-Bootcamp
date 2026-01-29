let mySet=new WeakSet();
let myObj={fname:"John ",lName:"Doe"};
// WeakSet is a set that contains object references only
mySet.add(myObj)
console.log(mySet)