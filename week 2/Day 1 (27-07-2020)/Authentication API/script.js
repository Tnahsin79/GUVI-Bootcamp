var url='https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=65de4a1b80cfff59f6db09659cb35599';
var request = new XMLHttpRequest();
request.open('GET',url, true);

// Send request
request.send();

request.onload = function() {
  // Begin accessing JSON data here
var data = JSON.parse(this.response)
console.log(data);
}


