import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'; 
import { FormsModule } from '@angular/forms'; 
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather',
  standalone: true, 
  imports: [CommonModule, IonicModule, FormsModule], 
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent {
  city: string = '';
  weatherData: any;
  errorMessage: string = '';

  // inject WeatherService 
  constructor(private weatherService: WeatherService) {}

  // obtain weather data for the specified city
  getWeather(): void {
    if (this.city) {
      this.weatherService.getWeather(this.city).subscribe(
        (data) => {
          this.weatherData = data;
          this.errorMessage = ''; // clear error on success
        },
        (error) => {
          this.weatherData = null;
          this.errorMessage = 'City not found or network error!';
        }
      );
    }
  }
}
