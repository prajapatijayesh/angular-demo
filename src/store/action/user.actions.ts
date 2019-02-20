import { Action } from '@ngrx/store';

// user
export enum UserActionTypes {
    USER_REQUEST = '[User] User Request',
    USER_SUCCESS = '[User] User Success',
    USER_FAILURE = '[User] User Failure'
}

export class UserRequestAction implements Action {
    readonly type = UserActionTypes.USER_REQUEST;
    constructor(public payload: any) { }
}

export class UserSuccessAction implements Action {
    readonly type = UserActionTypes.USER_SUCCESS;
    constructor(public payload: any) { }
}
export class UserFailureAction implements Action {
    readonly type = UserActionTypes.USER_FAILURE;
    constructor(public payload: any) { }
}

export type UserActions = UserRequestAction | UserSuccessAction | UserFailureAction;