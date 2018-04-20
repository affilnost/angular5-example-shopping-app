import {Component, ViewChild} from '@angular/core';
import {ShoppingList} from '../shared/shopping-list.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ShoppingService} from '../shared/shopping.service';
import {MatDialog} from '@angular/material';
import {Router} from '@angular/router';
import {AppConfig} from '../../config/app.config';

@Component({
  selector: 'app-remove-shopping-list-dialog',
  templateUrl: './remove-shopping-list.dialog.html',
})

export class RemoveShoppingListDialogComponent {
  constructor() {
  }
}


@Component({
  selector: 'app-shopping-lists',
  templateUrl: './shopping-lists.component.html',
  styleUrls: ['./shopping-lists.component.scss']
})
export class ShoppingListsComponent {

  shoppingLists: ShoppingList[];
  newShoppingListForm: FormGroup;

  @ViewChild('form') myNgForm; // just to call resetForm method

  constructor(private shoppingService: ShoppingService,
              private dialog: MatDialog,
              private router: Router,
              private formBuilder: FormBuilder) {
    this.newShoppingListForm = this.formBuilder.group({
      'name': ['', [Validators.required]]
    });
    this.shoppingLists = this.shoppingService.getAllShoppingLists().sort(
      (a, b) => {
        return b.id - a.id;
      }
    );
  }

  createNewShoppingList(newShoppingList: ShoppingList) {
    const newSLWithId = this.shoppingService.createShoppingList(newShoppingList);
    this.shoppingLists.unshift(newSLWithId);
    this.myNgForm.resetForm();
    this.shoppingService.showSnackBar('shoppingListCreated');
  }

  seeShoppingListDetails(shoppingList): void {
    this.router.navigate([AppConfig.routes.shopping + '/' + shoppingList.id]);
  }

  remove(shoppingListToRemove: ShoppingList): void {
    const dialogRef = this.dialog.open(RemoveShoppingListDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.shoppingService.deleteShoppingListById(shoppingListToRemove.id);
        this.shoppingLists = this.shoppingLists.filter(sl => sl.id !== shoppingListToRemove.id);
        this.shoppingService.showSnackBar('shoppingListRemoved');
      }
    });
  }

}
