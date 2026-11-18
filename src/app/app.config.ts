import { ApplicationConfig, provideZonelessChangeDetection, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(), // <-- Activation du nouveau moteur basé sur les Signals
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(), provideClientHydration()
  ]
};