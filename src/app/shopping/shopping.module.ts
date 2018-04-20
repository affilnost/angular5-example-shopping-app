import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {ShoppingRoutingModule} from './shopping-routing.module';
import {SharedModule} from '../shared/shared.module';


import {ShoppingListsComponent, RemoveShoppingListDialogComponent} from './shopping-lists/shopping-lists.component';
import {ShoppingService} from './shared/shopping.service';
import {ShoppingComponent} from './shopping.component';
import {SharedComponentsModule} from '../shared/shared-components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ShoppingRoutingModule,
    ReactiveFormsModule,
    SharedComponentsModule
  ],
  declarations: [
    ShoppingComponent,
    ShoppingListsComponent,
    RemoveShoppingListDialogComponent
  ],
  entryComponents: [
    RemoveShoppingListDialogComponent
  ],
  providers: [
    ShoppingService
  ]
})
export class ShoppingModule {
}
