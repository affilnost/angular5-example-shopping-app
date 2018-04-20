import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {ShoppingRoutingModule} from './shopping-routing.module';
import {SharedModule} from '../shared/shared.module';


import {ShoppingListsComponent, RemoveShoppingListDialogComponent} from './shopping-lists/shopping-lists.component';
import {ShoppingService} from './shared/shopping.service';
import {ShoppingListDetailComponent} from './shopping-list-detail/shopping-list-detail.component';
import {ShoppingComponent} from './shopping.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ShoppingRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    ShoppingComponent,
    ShoppingListsComponent,
    ShoppingListDetailComponent,
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
