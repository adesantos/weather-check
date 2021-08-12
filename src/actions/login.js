const GET_LOGIN = "GET_LOGIN";

function getLogin (user){
    return{
        type: GET_LOGIN,
        auth: true,
        payload: user
    }
}

export function login (username, password){
    const credentials ={
        username: "user1",
        password: "passuser1"
    }
    return dispatch => {

        if(credentials.username === username && credentials.password === password){
            dispatch(getLogin(credentials.username));
            return true;
        }
    }
}