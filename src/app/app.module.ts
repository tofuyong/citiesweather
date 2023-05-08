import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ListcitiesComponent } from './components/listcities.component';
import { AddcityComponent } from './components/addcity.component';
import { DetailsComponent } from './components/details.component';

@NgModule({
  declarations: [
    AppComponent,
    ListcitiesComponent,
    AddcityComponent,
    DetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
