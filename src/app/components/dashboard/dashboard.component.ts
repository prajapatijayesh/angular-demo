import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import * as _ from 'lodash';
import { Observable } from 'rxjs';

import { UserRequestAction } from '../../../store/action/user.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  __ = _;

  user: any;
  isUserLoading: boolean = false;

  constructor(
    private _store: Store<any>,
  ) { }

  ngOnInit() {
    // dispatch me action
    this.isUserLoading = true;
    // select user state
    this._store.dispatch(new UserRequestAction({}));
    // fetch user
    this._store.select('user').subscribe((v) => {
      console.log('***v***', v);
      if (v && v.user) {
        this.user = v.user;
      }
    });
  };
}
