import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UdashboardPageRoutingModule } from './udashboard-routing.module';

import { UdashboardPage } from './udashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UdashboardPageRoutingModule
  ],
  declarations: [UdashboardPage]
})
export class UdashboardPageModule {}
