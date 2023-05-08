import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  cities: string[] = ["Singapore", "Kuala Lumpur", "Tokyo", "Bangkok", "Hong Kong", "Beijing"];

  constructor(private httpClient: HttpClient) { }

  addCity(city: string) {
    this.cities.push(city);
  }

  getWeather(city: string): Promise<any> {
    const params = new HttpParams()
                  .set("q", city)
                  .set("units", "metric")
                  .set("appid", environment.openWeatherApiKey);
    console.log("Params: ", params);
    return lastValueFrom (this.httpClient.get(
        environment.openWeatherApiUrl, 
        {params: params}));
  }

}
