import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ShoppingComponent} from './shopping.component';
import {ShoppingListsComponent} from './shopping-lists/shopping-lists.component';
import {ShoppingListDetailComponent} from './shopping-list-detail/shopping-list-detail.component';

const shoppingRoutes: Routes = [
  {
    path: '',
    component: ShoppingComponent,
    children: [
      {path: '', component: ShoppingListsComponent, data: {'title': 'Shopping'} },
      {path: ':id', component: ShoppingListDetailComponent, data: {'title': 'ShoppingList'}}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(shoppingRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class ShoppingRoutingModule {
}
