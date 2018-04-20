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
  repositoryURL: 'https://github.com/affilnost/angular5-example-shopping-app'
};
