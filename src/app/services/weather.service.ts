import { Injectable } from '@angular/core';
import {WEATHER} from '../models/weatherModel';
import {WEATHERS} from '../mock/WEATHER-MOCK';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  weatherEndpoint = 'http://localhost:3000/api';
  useLocalWeathers : boolean = true;//uncomment to use local contacts
  weather = WEATHERS;
  getWeathers(): Observable<WEATHER[]> {
    if (!this.useLocalWeathers) {
      return this.httpClient.get<WEATHER[]>(this.weatherEndpoint); }
    else {
      return of(this.weather);
    }
  }

  addContact(newContact: WEATHER): any {

    return this.httpClient.post<any>(this.weatherEndpoint, newContact);

  }

  constructor(private httpClient: HttpClient) { }
}
