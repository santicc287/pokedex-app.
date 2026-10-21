import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'list-pokemon',
    loadComponent: () =>
      import('./pages/list-pokemon/list-pokemon.page').then(
        (m) => m.ListPokemonPage
      ),
  },
  {
    path: 'detail-pokemon',
    loadComponent: () =>
      import('./pages/detail-pokemon/detail-pokemon.page').then(
        (m) => m.DetailPokemonPage
      ),
  },
];
