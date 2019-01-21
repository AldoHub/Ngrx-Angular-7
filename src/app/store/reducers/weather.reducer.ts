//import all the actions
import * as weatherActions from "../actions/weather.action";

//weather state interface
export interface WeatherState {
    data: Object,
    loaded: boolean,
    loading: boolean

}

//add the type interface to the state
//main state
export const initialState: WeatherState = {
    data: {},
    loaded: false, 
    loading: false
}

//--------- REDUCER
export function reducer(state = initialState, action:weatherActions.WeatherActions): WeatherState{
    
    switch(action.type){
        case weatherActions.FETCH_WEATHER: {
            console.log("From Reducer Action Fetch");
            return {
                ...state, loading: true
            }
        }
        case weatherActions.FETCH_WEATHER_SUCCESS: {
            console.log("From Reducer Action Success", action.payload)
            const data = action.payload;
            
            return {
                ...state, loading: false, loaded: true, data
            }
        }
        case weatherActions.FETCH_WEATHER_FAIL: {
            console.log("From Reducer Action Fail", action.payload)
            const data = action.payload;
            return {
                ...state, loading: false, loaded: false, data
            }
        }
      
    }


    return state;
}


//------------------ Access slices of the state (something like getters)

export const getWeatherLoading = (state: WeatherState) => {
   return state.loading;
}

export const getWeatherLoaded = (state: WeatherState) => {
    return state.loaded;
}

export const getWeatherData = (state: WeatherState) => {
    return state.data;
}