export const places = (state = {}, action) => {
    switch (action.type) {
        case "GET_PLACES":
            return{
                ...state,
                places: action.places
            }
        default:
            return state;
    }
}

export const weather = (state = {}, action) => {
    switch (action.type) {
        case "GET_WEATHER":
            return{
                ...state,
                weather: action.weather
            }
        default:
            return state;
    }
}