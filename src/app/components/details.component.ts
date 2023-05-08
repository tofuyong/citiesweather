import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherService } from '../service/weather.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { WeatherDetails } from '../models';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnDestroy {
  city: string = "";
  params$!: Subscription;
  // weatherDetails = new WeatherDetails ('', 0, 0, '');
  weatherDetails = new WeatherDetails ('', 0, 0, '');

  constructor(private weatherSvc: WeatherService, private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
      this.params$ = this.activatedRoute.params.subscribe(
        (params) => {
          this.city = params['city']
        }
      );
      this.weatherSvc.getWeather(this.city)
      .then( 
        (result) => {
          console.log("result:", result);
            this.weatherDetails = new WeatherDetails (
              this.city,
              result.main.temp,
              result.main.humidity,
              result.weather[0].description
            )
          }
      ).catch( (err)=> {
        console.log(err);
        this.router.navigate(['']);
      });
  }

  ngOnDestroy(): void { this.params$.unsubscribe(); }

  // getWeatherDetailsFromAPI(city: string){
  //   this.weatherSvc.getWeather(city)
  //     .then( 
  //       (result) => {
  //         console.log("result:", result);
  //           this.weatherDetails = new WeatherDetails (
  //             city,
  //             result.main.temp,
  //             result.main.humidity,
  //             result.weather[0].description
  //           )
  //         }
  //     ).catch( (err)=> {
  //       console.log(err);
  //       this.router.navigate(['']);
  //     });
  // }

}

  
