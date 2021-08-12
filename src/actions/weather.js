import axios from "axios";
const GET_PLACES = "GET_PLACES";
const GET_WEATHER = "GET_WEATHER";

function places(places) {
    return { type: GET_PLACES, places }
}

function weather(weather){
    return { type: GET_WEATHER, weather}
}

export function getPlacesList(query) {

    return dispatch => {
        axios.get("https://api.weatherapi.com/v1/search.json?key=ecb61459b1f34c8ba4004445211008&country=us&q="+query)
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                dispatch(places(res.data));
                return res;
            })
            .catch(error => {
                //console.log(error);
                dispatch(places(error));
            })
    }
}

export function getWeather(name) {
    let place = name.replace(/,\s+/g, ',');
    place = place.split(",", 2);
    return dispatch => {
        axios.get("https://api.weatherapi.com/v1/current.json?key=ecb61459b1f34c8ba4004445211008&aqi=yes&q="+place)
            .then(res => {
                if(res.error){
                    throw (res.error);
                }
                dispatch(weather(res.data));
                return res;
            })
            .catch(error => {
                console.log(error);
            })
    }
}