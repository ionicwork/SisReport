import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { UserdailyreportPageRoutingModule } from './userdailyreport-routing.module';

import { UserdailyreportPage } from './userdailyreport.page';

import { Ng2SearchPipeModule } from 'ng2-search-filter'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserdailyreportPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [UserdailyreportPage]
})
export class UserdailyreportPageModule {}
