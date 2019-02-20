import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { LoginRequestAction } from '../../../store/action/login.actions';
import { LoginState } from 'src/store/app.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model = {
    email: '',
    password: ''
  }
  getLoginState: Observable<any>;
  isLoading: boolean = false;
  user: any;
  errorMessage: string;

  constructor(
    private _router: Router,
    private _store: Store<LoginState>
  ) {
    this.getLoginState = this._store.select('auth');
  }

  ngOnInit() {
    this.getLoginState.subscribe((state) => {
      this.isLoading = state.isLoading;
      this.user = state.user;
      this.errorMessage = state.error;
      if (this.user) {
        this._router.navigate(['dashboard']);
      }
    });
  }

  onSubmit = (): void => {
    const payload = {
      email: this.model.email,
      password: this.model.password
    };
    this._store.dispatch(new LoginRequestAction(payload));
  }

}
