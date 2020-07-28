var expected = {foo: 5, bar: 6};
var actual = {foo: 5, bar: 6};
function assertObjectsEqual(actual, expected, testName){
 // your code here
 if((JSON.stringify(actual) === JSON.stringify(expected))===true)
 console.log("Passed");
 else
 console.log("Failed",testName," Expected",expected,"but got",actual);
}
assertObjectsEqual(actual, expected, 'detects that two objects are equal');
var expected = {foo: 5, bar: 6};
var actual = {foo: 6, bar: 5};
assertObjectsEqual(actual, expected, 'detects that two objects are equal');
