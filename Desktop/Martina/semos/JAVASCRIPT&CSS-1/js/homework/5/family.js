const family = [
  {
    name: "John",
    age: 13,
  },
  {
    name: "Mark",
    age: 56,
  },
  {
    name: "Rachel",
    age: 45,
  },
  {
    name: "Nate",
    age: 67,
  },
  {
    name: "Jeniffer",
    age: 65,
  },
];


var max = Math.max.apply(null, family.map(item => item.age)),
    min = Math.min.apply(null, family.map(item => item.age)),
    difference = (max-min)
    

console.log('min', min); // 13
console.log('max', max); // 67
console.log('difference', difference) // 54

