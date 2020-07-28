var arr = [["make","Ford"], ["model","Mustang"], ["year",1964]];
function fromListToObject(arr) {
 var newObject = {};
 let i,j;
 for(i=0;i<arr.length;i++)
 {
     newObject[arr[i][0]]=arr[i][1];
 }
 return newObject;
}
console.log(fromListToObject(arr));
