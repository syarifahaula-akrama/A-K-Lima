import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BurgerabiPageRoutingModule } from './burgerabi-routing.module';

import { BurgerabiPage } from './burgerabi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BurgerabiPageRoutingModule
  ],
  declarations: [BurgerabiPage]
})
export class BurgerabiPageModule {}
