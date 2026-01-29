const obj = [
  {
    name: { first: "John ", Last: "Doe" },
  },
  {
    Occupation: { title: "SDE", Company: "Microsoft" },
  },
  {
    Expereince: { years: 5, field: "Software Development" },
  },
  {
    Address: { city: "New York", country: "USA" },
  },
];
console.log(obj[0].name.first);
console.log(obj[0]);

const obj2={
    name:["John Doe","John Wick","Jack Sparrow"],
    role:["SDE","HR","Developer"],
    Experience:[5,3,2]
}
console.log(obj2.name)

