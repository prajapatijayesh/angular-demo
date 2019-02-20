import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterStateSnapshot, Router } from '@angular/router';

import { Store } from '@ngrx/store';

import { Observable, of } from 'rxjs';

import { AppConfig } from '../app.config';
import { LoginActionTypes } from '../../store/action/login.actions';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private _store: Store<any>,
    private _router: Router,
    private _appConfig: AppConfig
  ) { }


  private _base_url = this._appConfig.baseUrl;
  redirectUrl: string;

  login(email: string, password: string): Observable<any> {
    // console.log('*** auth.service -> login ***');
    let reqBody = {
      email: email,
      password: password,
    };
    const url = this._base_url + '/auth/login';
    return this.http.post(url, reqBody, {
      'withCredentials': true
    });
  }

  me(): Observable<any> {
    const url = this._base_url + '/user/me';
    return this.http.post(url, {}, {
      'withCredentials': true
    });
  }

  isAuthenticated(state: RouterStateSnapshot) {
    return true;
  }

}
