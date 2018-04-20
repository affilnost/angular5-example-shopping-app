import {ModuleWithProviders, NgModule} from '@angular/core';
import {ShoppingListDetailComponent} from '../shopping/shopping-list-detail/shopping-list-detail.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import {MaterialModule} from './material.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    MaterialModule
  ],
  declarations: [
    ShoppingListDetailComponent
  ],
  exports: [
    ShoppingListDetailComponent
  ]
})

export class SharedComponentsModule {
}
