import {Component} from '@angular/core';
import {ShoppingList} from '../shared/shopping-list.model';
import {ShoppingService} from '../shared/shopping.service';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../shared/product.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-shopping-list-detail',
  templateUrl: './shopping-list-detail.component.html',
  styleUrls: ['./shopping-list-detail.component.scss']
})
export class ShoppingListDetailComponent {

  shoppingList: ShoppingList;
  products: Product[];
  search: string;
  shoppingListProducts: Product[];
  listNameEditMode: boolean;
  editShoppingListNameForm: FormGroup;

  constructor(private shoppingService: ShoppingService, private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder) {
    this.editShoppingListNameForm = this.formBuilder.group({
      'shoppingListName': ['', [Validators.required]]
    });
    this.activatedRoute.params.subscribe((params: any) => {
      if (params['id']) {
        this.shoppingList = this.shoppingService.getShoppingListById(params['id']);
      } else {
        if (this.shoppingService.isThereShoppingLists()) {
          // if there are any shopping lists - get the first one
          this.shoppingList = this.shoppingService.getFirstShoppingList();

        } else {
          // if there are no shopping lists
          this.shoppingList = this.shoppingService.initShoppingListsWithDefault();
        }
      }
      this.shoppingListProducts = this.shoppingService.getProductsByShoppingList(this.shoppingList);
    });

    this.shoppingService.getProducts().subscribe((products: Array<Product>) => {
      this.products = products;
    });

    this.listNameEditMode = false;
  }

  saveShoppingListName(formData: object) {
    const slName = formData['shoppingListName'];
    this.shoppingList.name = slName;
    this.shoppingService.updateShoppingList(this.shoppingList);
    this.shoppingService.showSnackBar('saved');

  }

  editShoppingListName() {
    if (this.listNameEditMode) {
      this.listNameEditMode = false;
    } else {
      this.listNameEditMode = true;
    }
  }

  removeProductFromShoppingList(product: Product) {
    this.shoppingListProducts = this.shoppingListProducts.filter(pr => pr.id !== product.id);
    this.shoppingService.removeProductFromShoppingList(product, this.shoppingList);
    this.shoppingService.showSnackBar('productRemovedFromShoppingList');

  }

  getProducts() {
    this.shoppingService.getProducts(this.search).subscribe((products: Array<Product>) => {
      this.products = products;
    });
  }

  addProductToCurrentList(product) {
    this.shoppingService.addProductToShoppingList(product, this.shoppingList);
    this.shoppingService.showSnackBar('productAdded');
    this.shoppingListProducts.unshift(product);
  }
}
