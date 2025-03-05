import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: 'home',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
    title: 'Home',
  },
  {
    path: 'aboutus',
    loadComponent: () => import('./aboutus/aboutus.component').then(m => m.AboutusComponent),
    title: 'About-us',
  },
  {
    path: 'contactus',
    loadComponent: () => import('./contactus/contactus.component').then(m => m.ContactusComponent),
    title: 'Contact-us',
  },
  {
    path: 'services',
    loadComponent: () => import('./services/services.component').then(m => m.ServicesComponent),
    title: 'Services',
  },
  {
    path: 'strategy',
    loadComponent: () => import('./strategy/strategy.component').then(m => m.StrategyComponent),
    title: 'Strategy',
  },

  {
    path: '**',
    loadComponent: () => import('./notfound/notfound.component').then(m => m.NotfoundComponent),
    title: 'Not Found',
  }
];
