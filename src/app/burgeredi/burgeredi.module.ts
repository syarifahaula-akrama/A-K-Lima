import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BurgerediPageRoutingModule } from './burgeredi-routing.module';

import { BurgerediPage } from './burgeredi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BurgerediPageRoutingModule
  ],
  declarations: [BurgerediPage]
})
export class BurgerediPageModule {}
