var url='https://dog.ceo/api/breeds/list/all';
var request = new XMLHttpRequest();
request.open('GET',url, true);
request.onload = function() {
  // Begin accessing JSON data here
var data = JSON.parse(this.response)
console.log(data);
}

// Send request
request.send()
