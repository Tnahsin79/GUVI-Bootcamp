var obj = {name: "ISRO", age: 35, role: "Scientist"};
function convertListToObject(obj) {
 // your code here
 var arr = [];

  for (var key in obj){
    arr.push([key, obj[key]]);
  }
  console.log(arr);
}
convertListToObject(obj);
