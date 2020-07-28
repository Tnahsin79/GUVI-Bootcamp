var url='https://dog.ceo/api/breeds/list/all';

try {
  //Block of code to try
  var request = new XMLHttpRequest();
  request.open('GET',url, true);
  // Send request
  request.send();
}
catch(err) {
  //Block of code to handle errors
  console.log("error (error message)");
}
finally {
  //Block of code to be executed regardless of the try / catch result
  request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  console.log(data);
  }
}
