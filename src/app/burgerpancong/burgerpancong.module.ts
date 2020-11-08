import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BurgerpancongPageRoutingModule } from './burgerpancong-routing.module';

import { BurgerpancongPage } from './burgerpancong.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BurgerpancongPageRoutingModule
  ],
  declarations: [BurgerpancongPage]
})
export class BurgerpancongPageModule {}
