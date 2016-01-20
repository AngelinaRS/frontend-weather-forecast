// Javascript Code.
//My key c84d8da47add8cb0

$(document).ready(function() {

	$("#SearchWeather").click(function(){
		var country = $("#country").val();
		var state = $("#state").val();
		var typeTemperature = $("input[name=temperature]:checked").val();

		if(country != "" && state != ""){

			$.ajax({
				url : "http://api.wunderground.com/api/c84d8da47add8cb0/conditions/q/" + country + "/" + state + ".json",
				data : "jsonp",

				success : function(json_parsed){
					var city = json_parsed["current_observation"]["display_location"]["full"];
					var weather = json_parsed["current_observation"]["weather"];
					var icon = json_parsed["current_observation"]["icon_url"];
					var wind = json_parsed["current_observation"]["wind_kph"];
					var temp_f = json_parsed["current_observation"]["temp_f"];
					var temp_c = json_parsed["current_observation"]["temp_c"];
					var humidity = json_parsed["current_observation"]["relative_humidity"];
					var latitude = json_parsed["current_observation"]["display_location"]["latitude"];
					var longitude = json_parsed["current_observation"]["display_location"]["longitude"];
					var elevation = json_parsed["current_observation"]["observation_location"]["elevation"];
					$(".to-hide").addClass("hide");
					$("#nameCity").html(city);
					$("#weather").html(weather);
					$("#icon").html("<img src" + "=" + "'" + icon + "'" + "/>");
					$(".black").removeClass("hide");
					$("#wind").html(wind + " kph");
					$("#humidity").html(humidity);
					$("#latitude").html(latitude);
					$("#longitude").html(longitude);
					$("#elevation").html(elevation);
					$("#date").html(new Date());
					$("#new-search").removeClass("hide");
					if(typeTemperature === "fahrenheit"){
						$("#temperature").html(temp_f + " °F");
					} else {
						$("#temperature").html(temp_c + " °C");
					}
				}
			});
		} else {
			alert("Insert Country and State")
		}
	});

	$("#new-search").click(function(){
		document.getElementById("input-reset").reset();
		location.reload(true);
		$(".to-hide").removeClass("hide");
		$(".to-show").addClass("hide");

	});
});
