import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddleaveformPageRoutingModule } from './addleaveform-routing.module';

import { AddleaveformPage } from './addleaveform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddleaveformPageRoutingModule
  ],
  declarations: [AddleaveformPage]
})
export class AddleaveformPageModule {}
