import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';


import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';

import { Error404Component} from './error404/error404.component';
import {ProgressBarService} from './progress-bar.service';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    SharedModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    Error404Component
  ],
  providers: [
    ProgressBarService
  ]
})
export class CoreModule {
}
