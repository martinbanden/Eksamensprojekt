fetch('http://api.openweathermap.org/data/2.5/weather?q=Kolding,dk&appid=caeb60e0b1af46b454d169c0b13cee6e')//anmodning til server for at hente data
    .then(function (resp) { return resp.json() })//tag resulteter man fik og lave om til json string
    .then(function (data) {// her laver den hentede data om, så den blive vist på skærmen
        document.querySelector('.package-name').textContent = data.name;
        document.querySelector('.price').innerHTML = Math.round(data.main.temp - 273) + '&deg;';//til grader
        document.querySelector('.disclaimer').textContent = data.weather[0]['description'];
        //https://openweathermap.org/img/wn/02d@2x.png
        document.querySelector('.features li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    })
    .catch(function () {
        // catch any errors
    });        
                                                                                                                                                                                                                                                                                             