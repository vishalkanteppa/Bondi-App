import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  private apiKey = '911986b82bdddd550a432ec9fc673e9d'; 

  constructor(private http: HttpClient) {}

  // function to obtain weather data for a city
  getWeather(city: string): Observable<any> {
    // url for weather API request with appropriate parameters
    const url = `${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric`;
    return this.http.get<any>(url);
  }
}
