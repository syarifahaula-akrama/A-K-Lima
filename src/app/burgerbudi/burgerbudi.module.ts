import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BurgerbudiPageRoutingModule } from './burgerbudi-routing.module';

import { BurgerbudiPage } from './burgerbudi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BurgerbudiPageRoutingModule
  ],
  declarations: [BurgerbudiPage]
})
export class BurgerbudiPageModule {}
