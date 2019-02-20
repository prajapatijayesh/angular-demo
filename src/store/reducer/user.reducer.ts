import { UserActions, UserActionTypes } from '../action/user.actions';

export interface UserState {
    user;
    error;
};

const initialState = {
    user: null,
    error: null
};

export function UserReducer(state: any = initialState, action: UserActions): UserState {
    switch (action.type) {
        case UserActionTypes.USER_REQUEST:
            const entities = {
                data: action.payload
            };
            return {
                ...state,
                user: action.payload,
                error: null,
                isLoading: true
            };
        case UserActionTypes.USER_SUCCESS:
            return {
                ...state,
                user: action.payload.body,
                error: null,
                isLoading: false
            };
        case UserActionTypes.USER_FAILURE:
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