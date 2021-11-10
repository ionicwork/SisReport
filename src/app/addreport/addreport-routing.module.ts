import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddreportPage } from './addreport.page';

const routes: Routes = [
  {
    path: '',
    component: AddreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddreportPageRoutingModule {}
