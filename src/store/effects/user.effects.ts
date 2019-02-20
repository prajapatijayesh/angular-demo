
import { Injectable } from '@angular/core';

import { Actions, Effect } from '@ngrx/effects';

import { Observable, of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import { UserActionTypes, UserSuccessAction, UserFailureAction } from '../action/user.actions';
import { DashboardService } from '../../app/services/dashboard.service';

@Injectable()
export class UserEffects {
    constructor(
        private actions$: Actions,
        private _dashboardService: DashboardService,
    ) { }

    @Effect()
    User$: Observable<any> = this.actions$
        .ofType(UserActionTypes.USER_REQUEST)
        .pipe(
            map((action: any) => action.payload),
            switchMap(payload => {
                return this._dashboardService.fetch_user(payload)
                    .pipe(
                        map((user) => {
                            // console.log('user$', user);
                            return new UserSuccessAction(user);
                        }),
                        catchError(error => of(new UserFailureAction(error.error)))
                    )
            })
        )
}