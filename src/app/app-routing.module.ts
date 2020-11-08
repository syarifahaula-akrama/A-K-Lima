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
  },  {
    path: 'burgerbudi',
    loadChildren: () => import('./burgerbudi/burgerbudi.module').then( m => m.BurgerbudiPageModule)
  },
  {
    path: 'burgerabi',
    loadChildren: () => import('./burgerabi/burgerabi.module').then( m => m.BurgerabiPageModule)
  },
  {
    path: 'burgerdani',
    loadChildren: () => import('./burgerdani/burgerdani.module').then( m => m.BurgerdaniPageModule)
  },
  {
    path: 'burgeredi',
    loadChildren: () => import('./burgeredi/burgeredi.module').then( m => m.BurgerediPageModule)
  },
  {
    path: 'penjual',
    loadChildren: () => import('./penjual/penjual.module').then( m => m.PenjualPageModule)
  },
  {
    path: 'mieburger',
    loadChildren: () => import('./mieburger/mieburger.module').then( m => m.MieburgerPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'burgermini',
    loadChildren: () => import('./burgermini/burgermini.module').then( m => m.BurgerminiPageModule)
  },
  {
    path: 'burgerpancong',
    loadChildren: () => import('./burgerpancong/burgerpancong.module').then( m => m.BurgerpancongPageModule)
  },
  {
    path: 'burgerkampoeng',
    loadChildren: () => import('./burgerkampoeng/burgerkampoeng.module').then( m => m.BurgerkampoengPageModule)
  },
  {
    path: 'burgermadu',
    loadChildren: () => import('./burgermadu/burgermadu.module').then( m => m.BurgermaduPageModule)
  },
  {
    path: 'burgerkentang',
    loadChildren: () => import('./burgerkentang/burgerkentang.module').then( m => m.BurgerkentangPageModule)
  },
  {
    path: 'followerabi',
    loadChildren: () => import('./followerabi/followerabi.module').then( m => m.FollowerabiPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
