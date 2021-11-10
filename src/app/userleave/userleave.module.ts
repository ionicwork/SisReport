import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserleavePageRoutingModule } from './userleave-routing.module';

import { UserleavePage } from './userleave.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserleavePageRoutingModule
  ],
  declarations: [UserleavePage]
})
export class UserleavePageModule {}
