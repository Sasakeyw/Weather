import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  weatherData;
  weather;
  weatherClouds;
  iconurl;
  weatherMain;
  weatherWind;
  temp;
  dateNow;
  constructor(private weatherService: WeatherService) {
    this.weatherService.getWeatherAPI().subscribe(response => {
      this.weatherData = response;
      this.weather = this.weatherData.weather[0];
      this.weatherMain = this.weatherData.main;
      this.weatherClouds = this.weatherData.clouds;
      this.weatherWind = this.weatherData.wind;
      this.temp = Math.round(this.weatherMain.temp - 273.15);
      this.dateNow = new Date();
      console.log('this.weatherData');
      console.log(this.weatherData);
      console.log('this.weatherMain');
      console.log(this.weatherMain);
      const url = 'http://openweathermap.org/img/w/';
      this.iconurl = url + this.weather.icon + '.png';
      });
  }

  ngOnInit() {

  }

  convertTemperetureFtoC(fahrenheit) {
    const celsius = (fahrenheit - 32) / 1.8;
    return celsius ;
  }

}
