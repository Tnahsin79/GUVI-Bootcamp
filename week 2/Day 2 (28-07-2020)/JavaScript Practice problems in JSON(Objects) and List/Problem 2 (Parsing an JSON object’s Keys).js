var obj = {name :"RajiniKanth", age : 25, hasPets : true};
function printAllKeys(obj) {
 // your code here
 var a=[];
 for(const [key, value] of Object.entries(obj)) {
 a.push(key);
}
console.log(a)
}
printAllKeys(obj);
