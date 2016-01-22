// Javascript Code.
//My key c84d8da47add8cb0

$(document).ready(function() {

	$("#SearchWeather").click(function(){
		/*When the user click in the button [Search]
		It obtains the value of the country, state and temperature (celsius or fahrenheit)*/
		var country = $("#country").val();
		var state = $("#state").val();
		var typeTemperature = $("input[name=temperature]:checked").val();

		if(country != "" && state != ""){ /*Only if the inputs are not empty*/

			$.ajax({
				url : "http://api.wunderground.com/api/c84d8da47add8cb0/conditions/q/" + country + "/" + state + ".json",
				data : "jsonp",

				success : function(json_parsed){
					try { /*Try if the names are valids to search the weather forecast*/
						var city = json_parsed["current_observation"]["display_location"]["full"];
					} catch(error) {
						alert("Write the correct names...");
						location.reload(); /*If the names are invalids reload the page*/
					}
					/*it obtains data of the API json*/
					var weather = json_parsed["current_observation"]["weather"];
					var icon = json_parsed["current_observation"]["icon_url"];
					var wind = json_parsed["current_observation"]["wind_kph"];
					var temp_f = json_parsed["current_observation"]["temp_f"];
					var temp_c = json_parsed["current_observation"]["temp_c"];
					var humidity = json_parsed["current_observation"]["relative_humidity"];
					var latitude = json_parsed["current_observation"]["display_location"]["latitude"];
					var longitude = json_parsed["current_observation"]["display_location"]["longitude"];
					var elevation = json_parsed["current_observation"]["observation_location"]["elevation"];
					$(".to-hide").addClass("hide"); /*Hide some the inputs and button search*/
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
		/*When the user click the button [new search]*/
		location.reload(); /*Reload the page*/
		$(".to-hide").removeClass("hide"); /*Show the inputs and button [Search]*/
		$(".to-show").addClass("hide"); /*Hide the information of the weather*/

	});
});
