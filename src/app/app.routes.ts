import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: 'home',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'aboutus',
    loadComponent: () => import('./aboutus/aboutus.component').then(m => m.AboutusComponent)
  },
  {
    path: 'contactus',
    loadComponent: () => import('./contactus/contactus.component').then(m => m.ContactusComponent)
  },
  {
    path: 'services',
    loadComponent: () => import('./services/services.component').then(m => m.ServicesComponent)
  },
  {
    path: 'strategy',
    loadComponent: () => import('./strategy/strategy.component').then(m => m.StrategyComponent)
  },

  {
    path: '**',
    loadComponent: () => import('./notfound/notfound.component').then(m => m.NotfoundComponent)
  }
];
