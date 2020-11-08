import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BurgerkampoengPage } from './burgerkampoeng.page';

const routes: Routes = [
  {
    path: '',
    component: BurgerkampoengPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BurgerkampoengPageRoutingModule {}
