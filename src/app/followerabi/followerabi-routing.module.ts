import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FollowerabiPage } from './followerabi.page';

const routes: Routes = [
  {
    path: '',
    component: FollowerabiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FollowerabiPageRoutingModule {}
