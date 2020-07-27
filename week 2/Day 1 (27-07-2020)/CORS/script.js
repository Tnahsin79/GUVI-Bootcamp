
var url='https://cors-anywhere.herokuapp.com/https://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com';
var request = new XMLHttpRequest();
request.open('GET',url, true);

// Send request
request.send();

request.onload = function() {
  // Begin accessing JSON data here
var data = JSON.parse(this.response)
console.log(data);
}


