$(document).ready(function(){
    var temp;
    var city = "Pune";
    var wind_speed = "";
    var feel = "";
    var humidity = "";
    var d =new Date();
    var hr = d.getHours();
    var min = d.getMinutes();
    var date = d.toLocaleDateString();
    console.log(date );
    console.log(d);
    $(".bgimg").hide(0);
    $(".pngs").hide(0);
    const settings = {
        async: true,
        crossDomain: true,
        url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city,
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f6ebb72971msh8fd4fbe9e39ef66p1229adjsn031cdc402b19',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
        temp = response.temp;
        feel = response.feels_like;
        humidity = response.humidity;
        wind_speed = response.wind_speed;
        document.getElementById("tempp").innerHTML = temp;
        document.getElementById("citydefault").innerHTML = city;
        document.getElementById("feelp").innerHTML = feel;
        document.getElementById("datep").innerHTML = date;
        document.getElementById("hp").innerHTML = humidity;
        document.getElementById("wsp").innerHTML = wind_speed;
        document.getElementById("timep").innerHTML ="  " + hr + " : " + min;
        console.log(temp);
        if (hr<19 && hr>17)
        {
            $("#sunset").show(0);
            $("#stbg").show(0);
        }
        else if (hr>19)
        {
            $("#moon").show(0);
            $("#nbg").show(0);
        }
        else if (hr>=0 && hr<6)
        {
            $("#moon").show(0);
            $("#nbg").show(0);
        }
        else if (hr<17 && hr>11)
        {
            $("#sun").show(0);
            $("#sbg").show(0);
        }
        else if (hr<11 && hr>6)
        {
            $("#sunrise").show(0);
            $("#srbg").show(0);
        }
    });

    console.log(hr  + " : " + min);
    $("#get").click(function(){
        city = $("#inp:text").val();
        console.log(city);
        const settings = {
        async: true,
        crossDomain: true,
        url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city,
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f6ebb72971msh8fd4fbe9e39ef66p1229adjsn031cdc402b19',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
        temp = response.temp;
        feel = response.feels_like;
        humidity = response.humidity;
        wind_speed = response.wind_speed;
        document.getElementById("tempp").innerHTML = temp;
        document.getElementById("citydefault").innerHTML = city;
        document.getElementById("feelp").innerHTML = feel;
        document.getElementById("datep").innerHTML = date;
        document.getElementById("hp").innerHTML = humidity;
        document.getElementById("wsp").innerHTML = wind_speed;
        document.getElementById("timep").innerHTML ="  " + hr + " : " + min;
        console.log(temp);
        
        if (hr<19 && hr>17)
        {
            $("#sunset").show(0);
            $("#stbg").show(0);
        }
        else if (hr>19)
        {
            $("#moon").show(0);
            $("#nbg").show(0);
        }
        else if (hr>=0 && hr<6)
        {
            $("#moon").show(0);
            $("#nbg").show(0);
        }
        else if (hr<17 && hr>11)
        {
            $("#sun").show(0);
            $("#sbg").show(0);
        }
        else if (hr<11 && hr>6)
        {
            $("#sunrise").show(0);
            $("#srbg").show(0);
        }
    });
    });
    
    
    
    
    
});