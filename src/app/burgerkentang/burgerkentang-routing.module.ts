import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BurgerkentangPage } from './burgerkentang.page';

const routes: Routes = [
  {
    path: '',
    component: BurgerkentangPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BurgerkentangPageRoutingModule {}
