import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PenjualPageRoutingModule } from './penjual-routing.module';

import { PenjualPage } from './penjual.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PenjualPageRoutingModule
  ],
  declarations: [PenjualPage]
})
export class PenjualPageModule {}
