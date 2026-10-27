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
  }
];
