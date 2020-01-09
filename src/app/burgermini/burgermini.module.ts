import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BurgerminiPageRoutingModule } from './burgermini-routing.module';

import { BurgerminiPage } from './burgermini.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BurgerminiPageRoutingModule
  ],
  declarations: [BurgerminiPage]
})
export class BurgerminiPageModule {}
