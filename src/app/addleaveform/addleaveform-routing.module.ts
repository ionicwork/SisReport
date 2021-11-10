import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddleaveformPage } from './addleaveform.page';

const routes: Routes = [
  {
    path: '',
    component: AddleaveformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddleaveformPageRoutingModule {}
