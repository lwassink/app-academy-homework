console.log("Hello from the JavaScript console!");

$.ajax({
  url: "http://api.openweathermap.org/data/2.5/weather?q=NY,NY&appid=bcb83c4b54aee8418983c2aff3073b3b",
  type: "GET",
  success: data => console.log(data.weather[0].description)
});

function successCallback(data) {
  console.log('hi');
  console.log(data);
  return data;
}

console.log("That's all folks!");
