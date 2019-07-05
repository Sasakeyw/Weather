import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private searchUrl = '/api/inspection/';


  constructor(private http: HttpClient) { }

  public getWeatherAPI() {
    console.log('service');

    const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather?id=';
    const CITY_ID = '1850147'; // tokyo
    const REQUEST_CHR  = '&APPID=';
    const API_KEY = environment.apikey;

    return this.http.get(BASE_URL + CITY_ID + REQUEST_CHR + API_KEY);

  }

}
