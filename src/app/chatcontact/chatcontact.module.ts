import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatcontactPageRoutingModule } from './chatcontact-routing.module';

import { ChatcontactPage } from './chatcontact.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatcontactPageRoutingModule
  ],
  declarations: [ChatcontactPage]
})
export class ChatcontactPageModule {}
