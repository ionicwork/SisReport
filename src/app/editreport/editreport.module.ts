import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { EditreportPageRoutingModule } from './editreport-routing.module';

import { EditreportPage } from './editreport.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    EditreportPageRoutingModule
  ],
  declarations: [EditreportPage]
})
export class EditreportPageModule {}
