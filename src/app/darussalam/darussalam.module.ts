import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DarussalamPageRoutingModule } from './darussalam-routing.module';

import { DarussalamPage } from './darussalam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DarussalamPageRoutingModule
  ],
  declarations: [DarussalamPage]
})
export class DarussalamPageModule {}
