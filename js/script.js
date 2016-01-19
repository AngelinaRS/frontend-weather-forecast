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
					var city = json_parsed["current_observation"]["display_location"]["city"];
					$("#nameCity").html(city);
				}
			});
		} else {
			alert("Insert Country and State")
		}
	});
});
