//alert('hello world')
//var let const
//var is gobally scope
//let is added in es6 we can reassign the value
//const can't be directly chanable
let ageold=21;
//ageold value can be change
ageold=22;
console.log(ageold);
//string, Number, Boolean, null,undefined
//strings
const name='ujjwal';
//Number
const age=20;
//Boolean
const isCool=true;
//null is variable which is mean empty 
const x=null;
//undefined
const y=undefined;
const rating =4.5;
console.log(typeof rating);
let z;
console.log(typeof isCool);

//concatenation
console.log('My name is '+ name + ' and I am ' + age);
//other method is template string using back tik :`
console.log(`My name is ${name} and i am ${age}`);
//Or
const othermethod= `My name is ${name} and i am ${age} year old.`;
console.log(othermethod);
console.error('This is a error');
console.warn('This is the warning');
const newa='Hello World !';
console.log(newa.lenght);
console.log(newa.toUpperCase());
console.log(newa.toLowerCase());
console.log(newa.substring(0,5));
console.log(newa.substring(3,7).toUpperCase());

