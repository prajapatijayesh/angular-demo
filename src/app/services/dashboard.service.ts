import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs';

import { AppConfig } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private http: HttpClient,
    private _appConfig: AppConfig
  ) { }

  private _base_url = this._appConfig.baseUrl;

  fetch_user(reqBody): Observable<any> {
    const url = this._base_url + '/users/prajapatijayesh';
    const req = new HttpRequest('GET', url);
    return this.http.request(req);
  }
}
