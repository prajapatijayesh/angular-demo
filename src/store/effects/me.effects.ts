
import { Injectable } from '@angular/core';

import { Actions, Effect } from '@ngrx/effects';

import { Observable, of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import { MeActionTypes, MeSuccessAction, MeFailureAction } from '../action/me.actions';
import { AuthService } from '../../app/services/auth.service';

@Injectable()
export class MeEffects {
    constructor(
        private actions$: Actions,
        private authService: AuthService,
    ) { }

    @Effect()
    Me$: Observable<any> = this.actions$
        .ofType(MeActionTypes.ME_REQUEST)
        .pipe(
            map((action: any) => action.payload),
            switchMap(payload => {
                return this.authService.me()
                    .pipe(
                        map((user) => {
                            // console.log('Me$', user);
                            return new MeSuccessAction(user);
                        }),
                        catchError(error => of(new MeFailureAction(error.error)))
                    )
            })
        )
}