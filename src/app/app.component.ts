import { Component } from '@angular/core';
import {WEATHER} from './models/weatherModel';
import {WeatherService} from './services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PS6';
  weathers : WEATHER[] | undefined;
  selectedWeather: WEATHER | undefined;

  getWeathers(): void {
    this.weatherService.getWeathers()
      .subscribe(weathers => {
        this.weathers = weathers;
        console.log(`Weathers: ${this.weathers}`)
      });
  }


  displayWeatherDetail(weather: WEATHER) {
    this.selectedWeather = weather;
  }

  constructor(private weatherService: WeatherService) {

  }
  ngOnInit() {
    this.getWeathers();
  }
}
