var a = {x: 60};

var b = Object.create(a);
b.y = 90;
console.log(b.__proto__.__proto__ === a.__proto__);

var c = Object.create(b);
c.z = 80;
console.log(c.__proto__.__proto__.__proto__ === a.__proto__);

console.log(c.z);
console.log(c.x);
console.log(c.y);