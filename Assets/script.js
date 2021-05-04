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
  
    $("image").attr("src", icon);
    $(".temp").text("Tempeture: " + temp);
    $(".wind").text("Wind: " + wind);
    $(".humidity").text("Humidity: " + humidity);
  });


  });
  
  $("#buttonList").click(function(e){
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
