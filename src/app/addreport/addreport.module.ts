import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddreportPageRoutingModule } from './addreport-routing.module';

import { AddreportPage } from './addreport.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddreportPageRoutingModule
  ],
  declarations: [AddreportPage]
})
export class AddreportPageModule {}
