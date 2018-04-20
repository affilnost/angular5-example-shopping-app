import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HttpClient} from '@angular/common/http';

// Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './shared/material.module';

// Translate
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {HttpLoaderFactory} from './app.translate.factory';

// Routing
import {AppRoutingModule} from './app-routing.module';

import {CoreModule} from './core/core.module';

import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';

import {SharedModule} from './shared/shared.module';

import {StateService} from './services/state/state.service';
import {APP_CONFIG, AppConfig} from './config/app.config';

import {ShoppingService} from './shopping/shared/shopping.service';
import {CommonModule} from '@angular/common';
import {SharedComponentsModule} from './shared/shared-components.module';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    SharedModule.forRoot(),
    AppRoutingModule,
    SharedComponentsModule
  ],
  providers: [
    {provide: 'state', useClass: StateService},
    {provide: APP_CONFIG, useValue: AppConfig},
    ShoppingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
