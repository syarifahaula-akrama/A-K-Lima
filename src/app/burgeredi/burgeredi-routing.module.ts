import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BurgerediPage } from './burgeredi.page';

const routes: Routes = [
  {
    path: '',
    component: BurgerediPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BurgerediPageRoutingModule {}
