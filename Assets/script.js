$(document).ready(function(){
 
  var cityValue = $("input").val();
  $(".cityName").text(cityValue);

  $("#searhcBtn").click(function(){
    $(".fiveDayForcast").show();
    $(".weatherContainer").show();
    var cityValue = $("input").val();
    $(".cityName").text(cityValue);
    $("#buttonList").append(`<button type="button" id="preCity" class="list-group-item list-group-item-action d-flex justify-content-center">`+ cityValue +`</button>`)

    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + cityValue + "&units=imperial&APPID=452ac1fbf4b642ff68e5b5bf6ad128c6", function(data){
    var icon = "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
    var temp = Math.floor(data.main.temp);
    var wind = data.wind.speed;
    var humidity = data.main.humidity;
    var lon = data.coord.lon
    var lat = data.coord.lat

    $.getJSON("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=452ac1fbf4b642ff68e5b5bf6ad128c6", function(data){

    data.daily.forEach(function(day,index) {
      console.log(day)

      
      if (index <= 5 && index >=1){
        $(".cardSpacer").append(`<div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">Future Weather</h5>
        <p class="card-text">${day.temp.day}</p>
        <p class="card-text">${day.wind_speed}</p>
        <p class="card-text">${day.humidity}</p>
        </div>
        </div>`)
      }
      
    });
    
  });
  
  $("image").attr("src", + icon);
  $(".temp").text("Tempeture: " + temp);
  $(".wind").text("Wind: " + wind);
  $(".humidity").text("Humidity: " + humidity);
});


});

$("#buttonList").click(function(e){
  
  $(".cardSpacer").empty()
  $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + e.target.innerText + "&units=imperial&APPID=452ac1fbf4b642ff68e5b5bf6ad128c6", function(data){
    var icon = "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
    var temp = Math.floor(data.main.temp);
    var wind = data.wind.speed;
    var humidity = data.main.humidity;
    
    $(".cityName").text(e.target.innerText);
    $(".icon").attr("src", icon);
    $(".temp").text("Tempeture: " + temp);
    $(".wind").text("Wind: " + wind);
    $(".humidity").text("Humidity: " + humidity);
  });
  
});


});
