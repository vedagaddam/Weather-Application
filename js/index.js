
$.getJSON("http://ipinfo.io/json", function(json) {
	//alert("11");
			 keys = Object.keys(json);
			 city = json["city"];
			 region = json["region"];
			 country = json["country"];
			 setloc = city + ", "+ region + ", " + country;
			 $("#location").html(setloc);
			 newQuery = "http://api.apixu.com/v1/current.json?key=ff3bfd8cb53d4074be5170635172503&q="+city;	     
		$.ajax({url: newQuery,  success:  function(ncontent){
			te = "cdn.apixu.com/weather/64x64/";
			icon= ncontent["current"]["condition"]["icon"];
			isDay = ncontent["current"]["is_day"];
			lenIcon = icon.length;
			te = icon.substr(2,lenIcon);
			ht = '<img src="'+te+'"/>';
			$("#pict").html(ht);			
			tempf = ncontent["current"]["temp_f"];
			tempc = ncontent["current"]["temp_c"];
			feelsc = ncontent["current"]["feelslike_c"];
			feelsf = ncontent["current"]["feelslike_f"];
			$("#temperature").html('<div id="temF">'+ tempf + '<font size="5">  <i class= "wi wi-fahrenheit" onclick="changeToC(tempc, tempf, feelsc, feelsf)" id="far"></i></font></div>');	
			$("#wind").html(ncontent["current"]["wind_mph"]+"mph");
			$("#feels").html(feelsf);
			
		}
		});
});


function changeToC(tempc, tempf, feelsc, feelsf){
	$("#temperature").html(" ");
	$("#temperature").html('<div id="temC">'+ tempc + '  <font size="5"><i class= "wi wi-celsius" onclick="changeToF(tempc, tempf, feelsc, feelsf)" id="far"></i></font></div>');
	$("#feels").html(feelsc);
}
function changeToF(tempc, tempf, feelsc, feelsf){
	$("#temperature").html(" ");
	$("#temperature").html('<div id="temF">'+ tempf + ' <font size="5"> <i class= "wi wi-fahrenheit" onclick="changeToC(tempc, tempf, feelsc, feelsf)" id="far"></i></font></div>');
	$("#feels").html(feelsf);
}

















