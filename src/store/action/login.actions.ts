import { Action } from '@ngrx/store';
import { MeActionTypes } from './me.actions';

// Defining the type of action
export enum LoginActionTypes {
    LOGIN_REQUEST = '[Login] Login Request',
    LOGIN_SUCCESS = '[Login] Login Success',
    LOGIN_FAILURE = '[Login] Login Failure'
}

/* 
Creating a class for each action with a constructor that allows us to pass in the payload. 
This isn't a required step, but it does provide you with strong typing.
*/
export class LoginRequestAction implements Action {
    readonly type = LoginActionTypes.LOGIN_REQUEST;
    constructor(public payload: any) { }
}

export class LoginSuccessAction implements Action {
    readonly type = LoginActionTypes.LOGIN_SUCCESS;
    constructor(public payload: any) { }
}

export class LoginFailureAction implements Action {
    readonly type = LoginActionTypes.LOGIN_FAILURE;
    constructor(public payload: any) { }
}

// Exporting all of our action classes for use within our upcoming reducer.
export type LoginActions = LoginRequestAction | LoginSuccessAction | LoginFailureAction;