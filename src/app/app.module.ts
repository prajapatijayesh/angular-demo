import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ClarityModule } from "@clr/angular";

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';

import { AppConfig } from './app.config';

import { httpInterceptorProviders } from '../http-interceptors';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { LoginEffects } from '../store/effects/login.effects';
import { MeEffects } from '../store/effects/me.effects';
import { UserEffects } from '../store/effects/user.effects';

import { AppReducers } from '../store/app.state';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ClarityModule,
    AppRoutingModule,
    StoreModule.forRoot(AppReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 5
    }),
    EffectsModule.forRoot([
      LoginEffects,
      MeEffects,
      UserEffects
    ])
  ],
  providers: [
    AppConfig,
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
