import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import {HttpClientModule} from "@angular/common/http";
import {WeatherService} from "./weather.service";

//import the NGRX Store
import {StoreModule} from "@ngrx/store";
//import effects module
import { EffectsModule } from "@ngrx/effects"; 

//import the reducers from the store dir
import {reducers, effects} from "./store";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({weather: reducers.weather}), //access using the createFeatureSelector
    EffectsModule.forRoot(effects)
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
