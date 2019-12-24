import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbiburgerPageRoutingModule } from './abiburger-routing.module';

import { AbiburgerPage } from './abiburger.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbiburgerPageRoutingModule
  ],
  declarations: [AbiburgerPage]
})
export class AbiburgerPageModule {}
