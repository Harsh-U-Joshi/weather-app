import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WearherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  weatherData?: WearherData;
  cityName: string = "London";

  constructor(private weatherService: WeatherService) {

  }

  ngOnInit(): void {
    this.getWeatherDate(this.cityName);
    this.cityName = '';
  }
   
  onSubmit(){
    this.getWeatherDate(this.cityName);
    this.cityName = '';
  }

  private getWeatherDate(cityName: string) {

    return this.weatherService.getWeatherData(cityName).subscribe({
      next: (response) => {
        this.weatherData = response;
        console.log(response);
      }
    })
  }
}
