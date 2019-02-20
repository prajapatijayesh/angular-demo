import { Action } from '@ngrx/store';

// Defining the type of action
export enum MeActionTypes {
    ME_REQUEST = '[Me] Me Request',
    ME_SUCCESS = '[Me] Me Success',
    ME_FAILURE = '[Me] Me Failure'
}

/* 
Creating a class for each action with a constructor that allows us to pass in the payload. 
This isn't a required step, but it does provide you with strong typing.
*/
export class MeRequestAction implements Action {
    readonly type = MeActionTypes.ME_REQUEST;
}

export class MeSuccessAction implements Action {
    readonly type = MeActionTypes.ME_SUCCESS;
    constructor(public payload: any) { }
}

export class MeFailureAction implements Action {
    readonly type = MeActionTypes.ME_FAILURE;
    constructor(public payload: any) { }
}

// Exporting all of our action classes for use within our upcoming reducer.
export type MeActions = MeRequestAction | MeSuccessAction | MeFailureAction;