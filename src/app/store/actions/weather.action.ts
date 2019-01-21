import { Action } from "@ngrx/store";

//import any interface you need here
//for the payload response on the success action

//action names
export const FETCH_WEATHER = "fetch_weather";
export const FETCH_WEATHER_FAIL = "fetch_weather_fail";
export const FETCH_WEATHER_SUCCESS = "fetch_weather_success";

//create the actions

export class FetchWeather implements Action {
    readonly type = FETCH_WEATHER;
    constructor(public payload: any){}
}

export class FetchWeatherFail implements Action {
    readonly type = FETCH_WEATHER_FAIL;
    //set payload to any to pass a message
    constructor(public payload: any){}
}

export class FetchWeatherSuccess implements Action {
    readonly type = FETCH_WEATHER_SUCCESS;
    //payload should match the type of the response
    constructor(public payload: any){}
}

//export the action types
export type WeatherActions = FetchWeather | FetchWeatherFail | FetchWeatherSuccess;
