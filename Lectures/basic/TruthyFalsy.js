var is1 = Boolean(1);
var is0 = Boolean(0);

Boolean(0)              //false
Boolean(null)           //false
Boolean(NaN)            //false
Boolean(undefined)      //false
Boolean(false)          //false
Boolean("")             //false

Boolean(1)              //true
Boolean("a")            //true
Boolean([])             //true
Boolean({})             //true
Boolean(function(){})   //true

console.log(`1 is ${is1}`);
console.log(`0 is ${is0}`);