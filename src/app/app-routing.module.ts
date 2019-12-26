import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'daftar',
    loadChildren: () => import('./page/daftar/daftar.module').then( m => m.DaftarPageModule)
  },
  {
    path: 'beranda',
    loadChildren: () => import('./page/beranda/beranda.module').then( m => m.BerandaPageModule)
  },
  {
    path: 'makanan',
    loadChildren: () => import('./page/makanan/makanan.module').then( m => m.MakananPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
