import { Routes } from '@angular/router';

export const routes: Routes = [
 /*
    {
    path: '', // Route d'accueil
    pathMatch: 'full',
    redirectTo: 'binding-tests'
  },*/

  {
    path: 'support',
    redirectTo: "Angular Front Avancé - 1.pdf"
  },
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
  },
  {
    path: 'signal-tests',
    loadComponent: () => import('./signal-test/signal-test').then(m => m.SignalTest)
  },
  {
    path: 'computed-cart',
    loadComponent: () => import('./computed-cart/computed-cart').then(m => m.ComputedCart)
  },
  {
    path: 'effect-tests',
    loadComponent: () => import('./effect-test/effect-test').then(m => m.EffectTest)
  },
  {
    path: 'productivityTracker',
    loadComponent: () => import('./productivity-tracker-component/productivity-tracker-component').then(m => m.ProductivityTrackerComponent)
  },
  {
    path: 'sensorComponent',
    loadComponent: () => import('./sensor-component/sensor-component').then(m => m.SensorComponent)
  },
  {
    path: 'sensorAsyncComponent',
    loadComponent: () => import('./sensor-async-component/sensor-async-component').then(m => m.SensorAsyncComponent)
  },
  {
    path: 'counter',
    loadComponent: () => import('./counter-component/counter-component').then(m => m.CounterComponent)
  },
  {
    path: 'task-manager',
    loadComponent: () => import('./task-manager/task-manager').then(m => m.TaskManager)
  },
  {
    path: 'bad-performance',
    loadComponent: () => import('./bad-performance-component/bad-performance-component').then(m => m.BadPerformanceComponent)
  },
  {
    path: 'good-performance',
    loadComponent: () => import('./good-performance-component/good-performance-component').then(m => m.GoodPerformanceComponent)
  },
  {
    path: 'chart-dash-board',
    loadComponent: () => import('./chart-dash-board/chart-dash-board').then(m => m.DashboardComponent)
  },
  {
    path: 'image-gallery',
    loadComponent: () => import('./image-gallery/image-gallery').then(m => m.ImageGalleryComponent)
  }

];
