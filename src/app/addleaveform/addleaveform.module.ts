import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddleaveformPageRoutingModule } from './addleaveform-routing.module';

import { AddleaveformPage } from './addleaveform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AddleaveformPageRoutingModule
  ],
  declarations: [AddleaveformPage]
})
export class AddleaveformPageModule {}
