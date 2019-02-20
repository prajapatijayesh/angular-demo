import { LoginActions, LoginActionTypes } from "../action/login.actions";

export interface LoginState {
    user;
    error;
};

/* 
Defining an initial or default state. 
This isn't required if you don't want to define a state right out of the box.
*/
const initialState = {
    user: null,
    error: null
};

/* 
This is our actual reducer. 
It takes in a state, which we're defining as a Login type and we've optionally bound it to initialState. 
It also takes in the action from our /action/login.actions file.
*/
export function LoginReducer(state: any = initialState, action: LoginActions): LoginState {
    /* 
    First, we use a switch to determine the type of action. 
    In the case of adding a login, we return the new state with the help of our newState() function. 
    We're simply passing in the previous state in the first parameter, and then our action in the second.
    */
    switch (action.type) {
        case LoginActionTypes.LOGIN_REQUEST:
            return {
                ...state,
                error: null,
                isLoading: true
            };
        case LoginActionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                error: null,
                isLoading: false
            };
        case LoginActionTypes.LOGIN_FAILURE:
            return {
                ...state,
                user: null,
                error: action.payload,
                isLoading: false
            };
        default: {
            return state;
        };
    };
};