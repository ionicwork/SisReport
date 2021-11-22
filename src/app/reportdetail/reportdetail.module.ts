import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportdetailPageRoutingModule } from './reportdetail-routing.module';

import { ReportdetailPage } from './reportdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportdetailPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ReportdetailPage]
})
export class ReportdetailPageModule {}
