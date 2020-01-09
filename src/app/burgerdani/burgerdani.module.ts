import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BurgerdaniPageRoutingModule } from './burgerdani-routing.module';

import { BurgerdaniPage } from './burgerdani.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BurgerdaniPageRoutingModule
  ],
  declarations: [BurgerdaniPage]
})
export class BurgerdaniPageModule {}
