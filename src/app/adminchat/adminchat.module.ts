import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminchatPageRoutingModule } from './adminchat-routing.module';

import { AdminchatPage } from './adminchat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminchatPageRoutingModule
  ],
  declarations: [AdminchatPage]
})
export class AdminchatPageModule {}
