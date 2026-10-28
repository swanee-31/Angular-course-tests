import { Routes } from '@angular/router';

export const routes: Routes = [
 /*
    {
    path: '', // Route d'accueil
    pathMatch: 'full',
    redirectTo: 'binding-tests'
  },*/
  {
    path: 'binding-tests',
    loadComponent: () => import('./binding-tests/binding-tests').then(m => m.BindingTests)
  },
  {
    path: 'observable-tests',
    loadComponent: () => import('./observable-test/observable-test').then(m => m.ObservableTest)
  },
  {
    path: 'async-pipe',
    loadComponent: () => import('./async-pipe/async-pipe').then(m => m.AsyncTest)
  },
  {
    path: 'ap-http-client',
    loadComponent: () => import('./ap-http-client/ap-http-client').then(m => m.APHttpClient)
  }
];
