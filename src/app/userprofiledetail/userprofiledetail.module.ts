import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserprofiledetailPageRoutingModule } from './userprofiledetail-routing.module';

import { UserprofiledetailPage } from './userprofiledetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserprofiledetailPageRoutingModule
  ],
  declarations: [UserprofiledetailPage]
})
export class UserprofiledetailPageModule {}
