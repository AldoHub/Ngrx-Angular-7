import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }

  getWeatherData(city: string): Observable<any>{
    //httpclient returns an observable
    return this.httpClient.get(`http://api.apixu.com/v1/current.json?key=<YOUR_KEY>&q=${city}`);
  }



}
