import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BurgerkentangPageRoutingModule } from './burgerkentang-routing.module';

import { BurgerkentangPage } from './burgerkentang.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BurgerkentangPageRoutingModule
  ],
  declarations: [BurgerkentangPage]
})
export class BurgerkentangPageModule {}
