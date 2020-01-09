import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BurgermaduPage } from './burgermadu.page';

const routes: Routes = [
  {
    path: '',
    component: BurgermaduPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BurgermaduPageRoutingModule {}
