import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PenjualPage } from './penjual.page';

const routes: Routes = [
  {
    path: '',
    component: PenjualPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PenjualPageRoutingModule {}
