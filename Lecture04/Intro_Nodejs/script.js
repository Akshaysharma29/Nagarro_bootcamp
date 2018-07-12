const lib=require('./lib')

console.log("hello" + lib.getname());
console.log(global.a);

const lib2=require('./lib')
lib.a=14
console.log(lib2);
console.log(lib.a + " in script");