import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MetodePageRoutingModule } from './metode-routing.module';

import { MetodePage } from './metode.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MetodePageRoutingModule
  ],
  declarations: [MetodePage]
})
export class MetodePageModule {}
