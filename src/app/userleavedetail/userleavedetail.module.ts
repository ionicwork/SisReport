import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserleavedetailPageRoutingModule } from './userleavedetail-routing.module';

import { UserleavedetailPage } from './userleavedetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserleavedetailPageRoutingModule
  ],
  declarations: [UserleavedetailPage]
})
export class UserleavedetailPageModule {}
