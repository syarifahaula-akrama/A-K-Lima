import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MetodePage } from './metode.page';

const routes: Routes = [
  {
    path: '',
    component: MetodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MetodePageRoutingModule {}
