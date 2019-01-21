import { ActionReducerMap, createSelector, createFeatureSelector } from "@ngrx/store";

//import the weather reducer
import * as weatherReducer from "./weather.reducer";

//state
export interface state {
    weather: weatherReducer.WeatherState
}

//register the reducer functions
export const reducers: ActionReducerMap<state> = {
    weather: weatherReducer.reducer
}


//get the full state
//export const getWeatherState = (state: weatherReducer.WeatherState) => state;

//select the part of the state that you need
//using the createFeatureSelector and addind the name of the state slice
export const selectWeatherState = createFeatureSelector("weather");

//get the state slices as needed
export const getWeatherStateData = createSelector(selectWeatherState, weatherReducer.getWeatherData);
export const getWeatherStateLoading = createSelector(selectWeatherState, weatherReducer.getWeatherLoading);
export const getWeatherStateLoaded = createSelector(selectWeatherState, weatherReducer.getWeatherLoaded);

