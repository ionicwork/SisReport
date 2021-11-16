import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { UserdailyreportPageRoutingModule } from './userdailyreport-routing.module';

import { UserdailyreportPage } from './userdailyreport.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserdailyreportPageRoutingModule,
  ],
  declarations: [UserdailyreportPage]
})
export class UserdailyreportPageModule {}
