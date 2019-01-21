import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators } from "@angular/forms";

//import the store
import { Store } from "@ngrx/store";
//import our store (reducers / actions)
import * as WeatherStore from "../store"; 

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private store: Store<WeatherStore.state>) { }

  weatherData;


  public weatherForm = new FormGroup({
    city: new FormControl('', Validators.required),
   
  });
  

 


  fetchWeather(formData: FormData){
    
    //get the value inside the formData
    let city = formData["city"];
    
    //dispatch the action
    //so we can populate the weather state
    this.store.dispatch(new WeatherStore.FetchWeather(city));  
  }




  ngOnInit() {
    //get the full state
    /*
    this.store.select(state => state).subscribe((data) => {
      console.log(data);
    })
    */
    
    //select from our store using the created "Store Selectors"
    this.store.select(WeatherStore.getWeatherStateData).subscribe((state) => {
      //console.log(data);
      //this.weatherData = state; 
      
      if(Object.keys(state).length !== 0){
        this.weatherData = state;
        console.log(this.weatherData)
      }



    });
  }

}
