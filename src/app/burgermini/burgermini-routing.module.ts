import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BurgerminiPage } from './burgermini.page';

const routes: Routes = [
  {
    path: '',
    component: BurgerminiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BurgerminiPageRoutingModule {}
