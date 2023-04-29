import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviornment } from 'src/environments/environment';
import { WearherData } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable<WearherData> {
    return this.http.get<WearherData>(enviornment.weatherApiBaseUrl, {
      params: new HttpParams()
        .set('q', cityName)
        .set('units', 'metric')
        .set('mode', 'json')
        .set('appid', enviornment.apiKey)
    });
  }
}
