$(document).ready(function(){
  
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
var lat = position.coords.latitude;
var lon = position.coords.longitude;
$.getJSON("https://fcc-weather-api.glitch.me/api/current?lon=" + lon + "&lat=" + lat, function(json) {
  var cTemp = (json.main.temp).toFixed(1);
  var cHi = (json.main.temp_max).toFixed(1);
  var cLo = (json.main.temp_min).toFixed(1);
  var fTemp = (cTemp * (9/5)+32).toFixed(1);
  var fHi = (cHi * (9/5)+32).toFixed(1);
  var fLo = (cLo * (9/5)+32).toFixed(1);
  var windSpeed = (json.wind.speed).toFixed(1);
  var kph = (windSpeed*1.60934).toFixed(1);
  var weatherType = json.weather[0].description;
  var city = json.name;
  var toggle = true;
  if (fTemp < 32) {
    $(".scene").attr("src","https://www.coolantarctica.com/Antarctica%20fact%20file/wildlife/DSC_0036a.jpg");
  }
  else if (fTemp < 80) {              
   $(".scene").attr("src", "http://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1468522865/find-perfect-weather-WARM0716_0.jpg?itok=T6ah2KFV");               
  }
  else {
    $(".scene").attr("src","http://riyadhconnect.com/wp-content/uploads/2012/10/articleleenakhan.jpg");
  };
  $(".location").html(city);
  $(".weather").html(weatherType);
  $("#now").html("Now: "+cTemp+" &#8451");
  $("#hi").html("High: "+cHi+" &#8451");
  $("#lo").html("Low: "+cLo+" &#8451");
  $("#wind").html("Wind: "+kph+" kph")
  $(".btn").on("click",function(){
    if (toggle === true) {
    $("#now").html("Now: "+fTemp+" &#8457");
    $("#hi").html("High: "+fHi+" &#8457");
    $("#lo").html("Low: "+fLo+" &#8457");
      $("#wind").html("Wind: "+windSpeed+" mph");
      $(".btn").html("Convert to metric");
      toggle = false;
    }
    else {
      $("#now").html("Now: "+cTemp+" &#8451");
    $("#hi").html("High: "+cHi+" &#8451");
    $("#lo").html("Low: "+cLo+" &#8451");
      $("#wind").html("Wind: "+kph+" kph");
      $(".btn").html("Convert to SI");
      toggle = true;
    };
  });
});
})};
});