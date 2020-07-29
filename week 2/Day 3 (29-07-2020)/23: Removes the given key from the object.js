var obj = {
 mykey: "value"
};
function addProperty(obj, key){
 // your code here
 obj[key]=true;
 console.log(obj);
 delete obj[key];
 console.log(obj);
}
addProperty(obj, "mykey2");
