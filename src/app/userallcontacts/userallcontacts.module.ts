import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserallcontactsPageRoutingModule } from './userallcontacts-routing.module';

import { UserallcontactsPage } from './userallcontacts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserallcontactsPageRoutingModule
  ],
  declarations: [UserallcontactsPage]
})
export class UserallcontactsPageModule {}
