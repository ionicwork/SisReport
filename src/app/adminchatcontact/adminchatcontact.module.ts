import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminchatcontactPageRoutingModule } from './adminchatcontact-routing.module';

import { AdminchatcontactPage } from './adminchatcontact.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminchatcontactPageRoutingModule
  ],
  declarations: [AdminchatcontactPage]
})
export class AdminchatcontactPageModule {}
