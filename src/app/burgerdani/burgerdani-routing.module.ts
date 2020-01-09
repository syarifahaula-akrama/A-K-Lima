import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BurgerdaniPage } from './burgerdani.page';

const routes: Routes = [
  {
    path: '',
    component: BurgerdaniPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BurgerdaniPageRoutingModule {}
