var arr = [[["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]], [["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]];
function transformEmployeeData(arr) {
 var newObject = [];
 let i,j;
 for(i=0;i<arr.length;i++)
 {
     let obj={};
     for(j=0;j<arr[i].length;j++)
     {
         obj[arr[i][j][0]]=arr[i][j][1];
     }
     arr[i]=obj;
 }
 return arr;
}
console.log(transformEmployeeData(arr));
