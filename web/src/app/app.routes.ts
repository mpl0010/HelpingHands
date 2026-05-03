import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing/landing-page.component';
import { NotFoundPageComponent } from './pages/not-found/not-found-page.component';

export const routes: Routes = [
    {
      path: '',
      component: LandingPageComponent,
      title: 'Landing Page',
      pathMatch: 'full'
    },
    {
      path: 'about',
      loadComponent: () =>
        import('./pages/about-us/about-us-page.component').then((m) => m.AboutUsPageComponent),
      title: 'About Us',
    },
    {
      path: '**',
      component: NotFoundPageComponent,
      title: 'Not Found'
    }
  ];
