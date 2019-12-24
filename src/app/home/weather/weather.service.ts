import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  public getWeatherAPI() {
    console.log('service');

    const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?id=';
    const CITY_ID = '1850147'; // tokyo
    const REQUEST_CHR  = '&APPID=';
    const API_KEY = environment.apikey;
    console.log(BASE_URL + CITY_ID + REQUEST_CHR + API_KEY);
    return this.http.get(BASE_URL + CITY_ID + REQUEST_CHR + API_KEY);

  }

  public getHoroscopeAPI() {
    console.log('service');

    const BASE_URL = 'http://api.jugemkey.jp/api/horoscope/free/';
    const DAY = this.getNowYMD();
    console.log(BASE_URL + DAY);
    return this.http.get(BASE_URL + DAY);

  }


  private getNowYMD() {
    const dt = new Date();
    const y = dt.getFullYear();
    const m = ('00' + (dt.getMonth() + 1)).slice(-2);
    const d = ('00' + dt.getDate()).slice(-2);
    const result = y + '/' + m + '/' + d;
    return result;
  }

}
