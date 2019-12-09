import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DarussalamPage } from './darussalam.page';

const routes: Routes = [
  {
    path: '',
    component: DarussalamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DarussalamPageRoutingModule {}
