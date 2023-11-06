import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'lunes',
    loadChildren: () => import('./lunes/lunes.module').then( m => m.LunesPageModule)
  },
  {
    path: 'martes',
    loadChildren: () => import('./martes/martes.module').then( m => m.MartesPageModule)
  },
  {
    path: 'miercoles',
    loadChildren: () => import('./miercoles/miercoles.module').then( m => m.MiercolesPageModule)
  },
  {
    path: 'jueves',
    loadChildren: () => import('./jueves/jueves.module').then( m => m.JuevesPageModule)
  },
  {
    path: 'viernes',
    loadChildren: () => import('./viernes/viernes.module').then( m => m.ViernesPageModule)
  },
  {
    path: 'sabado',
    loadChildren: () => import('./sabado/sabado.module').then( m => m.SabadoPageModule)
  },
  {
    path: 'domingo',
    loadChildren: () => import('./domingo/domingo.module').then( m => m.DomingoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
