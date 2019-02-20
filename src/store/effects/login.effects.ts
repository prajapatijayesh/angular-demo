
import { Injectable } from '@angular/core';

import { Actions, Effect } from '@ngrx/effects';

import { Observable, of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import { LoginActionTypes, LoginSuccessAction, LoginFailureAction } from '../action/login.actions';
import { AuthService } from '../../app/services/auth.service';

@Injectable()
export class LoginEffects {
    constructor(
        private actions$: Actions,
        private authService: AuthService,
    ) { }

    @Effect()
    Login$: Observable<any> = this.actions$
        .ofType(LoginActionTypes.LOGIN_REQUEST)
        .pipe(
            map((action: any) => action.payload),
            switchMap(payload => {
                return this.authService.login(payload.email, payload.password)
                    .pipe(
                        map((user) => {
                            // console.log('Login$', user);
                            return new LoginSuccessAction(user);
                        }),
                        catchError(error => of(new LoginFailureAction(error.error)))
                    )
            })
        )
}