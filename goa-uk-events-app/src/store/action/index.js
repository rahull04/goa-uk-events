import axios from 'axios';

export const signin = () => {
    return{
        type: "SIGN IN"
    }
}

export const saveUsers = (payload) => {
    return{
        type: "SAVE_USER",
        payload: payload
    }
}

export const fetchUsers = () => {
    
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(resp => {
                dispatch(saveUsers(resp.data));
            })
            .catch(err => {
                console.log("err",err);
            })
    };
}