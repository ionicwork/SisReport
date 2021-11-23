import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeavedetailPageRoutingModule } from './leavedetail-routing.module';

import { LeavedetailPage } from './leavedetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeavedetailPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [LeavedetailPage]
})
export class LeavedetailPageModule {}
