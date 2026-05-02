import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';
import { providePrimeNG } from 'primeng/config';
import { customTheme } from './themes/default-theme';

export const appConfig: ApplicationConfig = {
  providers: [
      provideBrowserGlobalErrorListeners(),
      provideRouter(routes, withInMemoryScrolling({scrollPositionRestoration: 'enabled'})),
      providePrimeNG({
          theme: {
              preset: customTheme,
              options: {
                  darkModeSelector: false
              }
          }
      })
  ]
};
