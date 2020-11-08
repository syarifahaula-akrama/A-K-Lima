import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MieburgerPageRoutingModule } from './mieburger-routing.module';

import { MieburgerPage } from './mieburger.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MieburgerPageRoutingModule
  ],
  declarations: [MieburgerPage]
})
export class MieburgerPageModule {}
