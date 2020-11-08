import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BurgerpancongPage } from './burgerpancong.page';

const routes: Routes = [
  {
    path: '',
    component: BurgerpancongPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BurgerpancongPageRoutingModule {}
