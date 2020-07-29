var arr = [1, 2, 3];
function hourToSeconds(arr) {
    let i;
    for(i=0;i<arr.length;i++)
    arr[i]*=1800;
    return arr;
}
var data = hourToSeconds(arr)
console.log(...data);
