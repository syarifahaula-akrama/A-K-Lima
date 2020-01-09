import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MieburgerPage } from './mieburger.page';

const routes: Routes = [
  {
    path: '',
    component: MieburgerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MieburgerPageRoutingModule {}
