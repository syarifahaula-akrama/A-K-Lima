import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BurgerbudiPage } from './burgerbudi.page';

const routes: Routes = [
  {
    path: '',
    component: BurgerbudiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BurgerbudiPageRoutingModule {}
