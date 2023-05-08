import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { WeatherService } from '../service/weather.service';

@Component({
  selector: 'app-addcity',
  templateUrl: './addcity.component.html',
  styleUrls: ['./addcity.component.css']
})
export class AddcityComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  city!: string;

  constructor(private fb: FormBuilder, private router: Router, private weatherSvc: WeatherService) { }

  ngOnInit(): void { this.form = this.createForm(); }
  ngOnDestroy(): void { }

  private createForm(): FormGroup {
    return this.fb.group({
      city: this.fb.control('')
    });
  }

  addCity() {
    this.city = this.form?.value["city"];
    this.weatherSvc.addCity(this.city);
    this.router.navigate(['/'])
  }
}
