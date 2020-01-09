import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BurgerkampoengPageRoutingModule } from './burgerkampoeng-routing.module';

import { BurgerkampoengPage } from './burgerkampoeng.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BurgerkampoengPageRoutingModule
  ],
  declarations: [BurgerkampoengPage]
})
export class BurgerkampoengPageModule {}
