import { Injectable, Injector } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { Router } from "@angular/router";

import { Observable } from "rxjs";
import { tap } from "rxjs/internal/operators";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(
        private _router: Router
    ) { };

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            tap((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    // do stuff with response if you want
                }
            }, (err: any) => {
                if (err instanceof HttpErrorResponse) {
                    if (err.status === 403) {
                        // redirect to the login route
                        this._router.navigate(['login']);
                    }
                }
            })
        );
    }
}