import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbiburgerPage } from './abiburger.page';

const routes: Routes = [
  {
    path: '',
    component: AbiburgerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbiburgerPageRoutingModule {}
