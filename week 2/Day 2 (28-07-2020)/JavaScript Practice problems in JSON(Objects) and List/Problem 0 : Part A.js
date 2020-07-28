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

cat["height"]=7;
cat["weight"]=9;
cat["name"]='Fluffyy';
//console.log(cat);

var i,act=[],sow=0;
var l=cat["catFriends"].length;
for(i=0;i<l;i++)
{
    for(j=0;j<cat["catFriends"][i]["activities"].length;j++)
    {
        act.push(cat["catFriends"][i]["activities"][j]);
    }
	sow+=cat["catFriends"][i]["weight"];
}
console.log(act);
console.log("sum of weight =",sow);

for(i=0;i<cat["activities"].length;i++)
act.push(cat["activities"][i]);
console.log(act);

for(i=0;i<cat["catFriends"].length;i++)
{
	cat["catFriends"][i]["activities"].push('activity1');
	cat["catFriends"][i]["activities"].push('activity2');
}
for(i=0;i<cat["catFriends"].length;i++)
{
    console.log(cat["catFriends"][i]["activities"]);
}

cat["catFriends"][0]["furcolor"]='pink';

console.log(cat);
