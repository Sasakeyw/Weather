import { Component, OnInit, OnDestroy  } from '@angular/core';
import { WeatherService } from './weather.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit, OnDestroy  {

  weatherData;
  weather;
  weatherClouds;
  iconurl;

  weatherMain;
  weatherWind;
  temp;
  dateNow;
  now: Observable<Date>;
  intervalList = [];
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
      const url = 'https://openweathermap.org/img/w/';
      this.iconurl = url + this.weather.icon + '.png';
      console.log('this.iconurl');
      console.log(this.iconurl);
      });
  }

  ngOnInit() {
    this.now = new Observable((observer) => {
      this.intervalList.push(setInterval(() => {
        observer.next(new Date());
      }, 1000));
    });
  }
  ngOnDestroy() {
    if (this.intervalList) {
      this.intervalList.forEach((interval) => {
        clearInterval(interval);
      });
    }
  }

  convertTemperetureFtoC(fahrenheit) {
    const celsius = (fahrenheit - 32) / 1.8;
    return celsius ;
  }

}
