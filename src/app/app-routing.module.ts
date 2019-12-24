import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'lokasi',
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
    path: 'harga',
    loadChildren: () => import('./harga/harga.module').then( m => m.HargaPageModule)
  },
  {
    path: 'lokasi',
    loadChildren: () => import('./lokasi/lokasi.module').then( m => m.LokasiPageModule)
  },
  {
    path: 'darussalam',
    loadChildren: () => import('./darussalam/darussalam.module').then( m => m.DarussalamPageModule)
  },
  {
    path: 'abiburger',
    loadChildren: () => import('./abiburger/abiburger.module').then( m => m.AbiburgerPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
