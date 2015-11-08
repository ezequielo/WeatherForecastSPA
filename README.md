# WeatherForecastSPA
A simple Single Page Application writen in **Javascript** using **AngularJS** framework and **Bootstrap**. Weather is provided by [openweathermap's API](http://openweathermap.org/api)

### Set up

In order to get this app working you need to:
* Download the code 
* Set your API key in the [services.js](services.js):
```
return weatherAPI.get({ q: city, cnt: days, appid: 'YOUR_API_KEY' });
```
* Run this app in a web server
