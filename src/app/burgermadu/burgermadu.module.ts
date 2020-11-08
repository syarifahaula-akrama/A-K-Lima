import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BurgermaduPageRoutingModule } from './burgermadu-routing.module';

import { BurgermaduPage } from './burgermadu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BurgermaduPageRoutingModule
  ],
  declarations: [BurgermaduPage]
})
export class BurgermaduPageModule {}
