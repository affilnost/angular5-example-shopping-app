import {InjectionToken} from '@angular/core';

export let APP_CONFIG = new InjectionToken('app.config');

export const AppConfig = {
  routes: {
    shopping: 'shopping',
    error404: '404'
  },
  endpoints: {
    productsBaseUrl: 'https://api.shutterstock.com',
    productsGetPath: '/v2/images/search'

  },
  snackBarDuration: 3000,
  repositoryURL: 'https://github.com/affilnost/angular5-example-shopping-app',
  defultSHContent: '[{"id":"257450194","name":"Chicken salad with leaf vegetables and cherry toma...",' +
  '"imgUrl":"https://image.shutterstock.com/display_pic_with_logo/236329/257450194/stock-photo-chicken-salad' +
  '-with-leaf-vegetables-and-cherry-tomatoes-257450194.jpg","description":"Chicken salad with leaf vegetables' +
  ' and cherry tomatoes"},{"id":"548526682","name":"Easter cake on a white background","imgUrl":"https://ima' +
  'ge.shutterstock.com/display_pic_with_logo/2675854/548526682/stock-photo-easter-cake-on-a-white-background' +
  '-548526682.jpg","description":"Easter cake on a white background"},{"id":"591617762","name":"Chocolate egg' +
  ' exploded","imgUrl":"https://image.shutterstock.com/display_pic_with_logo/685426/591617762/stock-photo-cho' +
  'colate-egg-exploded-591617762.jpg","description":"Chocolate egg exploded"},{"id":"525754399","name":"Glass' +
  ' of milk isolated on white","imgUrl":"https://image.shutterstock.com/display_pic_with_logo/371512/52575439' +
  '9/stock-photo-glass-of-milk-isolated-on-white-525754399.jpg","description":"Glass of milk isolated on whi' +
  'te"},{"id":"629596088","name":"Bread and Bakery Products Isolated on White. Diffe...","imgUrl":"https://i' +
  'mage.shutterstock.com/display_pic_with_logo/3011495/629596088/stock-photo-bread-and-bakery-products-isola' +
  'ted-on-white-different-types-of-bread-sesame-bun-baguette-baked-629596088.jpg","description":"Bread and Ba' +
  'kery Products Isolated on White. Different types of bread: sesame bun, baguette, baked rolls, rustic brea' +
  'd, round bun, sesame bun."}]'
};
