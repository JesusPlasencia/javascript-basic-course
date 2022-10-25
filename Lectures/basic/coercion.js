//!Coercion Implicita

var c1 = 4 + "7";
var c2 = 4 * 7;
console.log(c1 + " with typeof " + typeof c1);
console.log(c2 + " with typeof " + typeof c2);

var numtoString = String(c2);
console.log(numtoString + " with typeof " + typeof numtoString);

var stringtoNumber = Number(numtoString);
console.log(stringtoNumber + " with typeof " + typeof stringtoNumber);