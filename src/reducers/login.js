export const login = (state = {}, action) => {
    console.log(action.payload);
    switch (action.type) {
        case "GET_LOGIN":
            return {
                ...state,
                auth: true,
                user: action.payload
            }
        default:
            return state;
    }
}