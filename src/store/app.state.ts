import * as login from './reducer/login.reducer';
import * as user from './reducer/user.reducer';
import * as me from './reducer/me.reducer';

export interface LoginState {
    auth;
}
export interface UserState {
    user;
}

export interface MeState {
    me;
}

export const AppReducers = {
    auth: login.LoginReducer,
    user: user.UserReducer,
    me: me.MeReducer
}


