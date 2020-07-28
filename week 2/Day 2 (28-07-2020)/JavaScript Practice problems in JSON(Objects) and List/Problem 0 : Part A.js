var cat = {
 name: 'Fluffy',
 activities: ['play', 'eat cat food'],
 catFriends: [
 {
 name: 'bar',
 activities: ['be grumpy', 'eat bread omblet'],
 weight: 8,
 furcolor: 'white'
 }, 
 {
 name: 'foo',
 activities: ['sleep', 'pre-sleep naps'],
 weight: 3
 }
 ]
}
//console.log(cat);

cat["height"]=7;
cat["weight"]=9;
cat["name"]='Fluffyy';
var act=cat["catFriends"];
var sow=0;
var i;
var l=act.length;
//console.log(l);
for(i=0;i<l;i++)
{
	console.log(act[i]["name"]);
	console.log(act[i]["activities"]);
	sow+=a[i]["weight"];
}
console.log("sum of weight =",sow);
for(i=0;i<cat["catFriends"].length;i++)
{
	cat["catFriends"][i]["activities"].push('activity1');
	cat["catFriends"][i]["activities"].push('activity2');
}
cat["catFriends"][0]["furcolor"]='pink';

console.log(cat);
