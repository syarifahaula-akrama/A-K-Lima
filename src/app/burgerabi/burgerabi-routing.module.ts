import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BurgerabiPage } from './burgerabi.page';

const routes: Routes = [
  {
    path: '',
    component: BurgerabiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BurgerabiPageRoutingModule {}
