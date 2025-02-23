import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { MockData } from './services/mock-data';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { loaderInterceptor } from './interceptors/loader.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideHttpClient(withInterceptors([loaderInterceptor])), importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(MockData, {delay: 500}))],
};
