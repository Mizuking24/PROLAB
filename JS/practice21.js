var a = 1;
var b = 2;
var c = 3;
var d = 4;
var e = 5;
var f = 6;
var g = 7;


var list = [];
list.push(a);
list.push(b);
list.push(c);
list.push(d);
list.push(e);
list.push(f);
list.push(g);

list.sort(
  function sortfunc(a, b) {
    return a > b ? -1 : 1;
  }
);

console.log(list);
console.log(list[4]);