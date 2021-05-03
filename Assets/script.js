$(document).ready(function(){

  $("#searhcBtn").click(function(){
    $(".fiveDayForcast").show();
    $(".previousCity").show();
    $(".weatherContainer").show();
    var cityValue = $("input").val();
    $(".cityName").text(cityValue);

    console.log(cityValue)
    
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + cityValue + "&units=imperial&APPID=452ac1fbf4b642ff68e5b5bf6ad128c6", function(data){
  
    var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    var temp = Math.floor(data.main.temp);
    var wind = data.wind.speed;
    var humidity = data.main.humidity;
  
    $(".icon").attr("src", icon);
    $(".temp").append(temp);
    $(".wind").append(wind);
    $(".humidity").append(humidity);
  
    });
    
    //var index = ("input");

    //var searchHist = $(index,);// this line needs to give a value to whatever input is entered

   // parseInt($("input").attr());

    //localStorage.setItem(searchHist, cityValue);
    
  });




});