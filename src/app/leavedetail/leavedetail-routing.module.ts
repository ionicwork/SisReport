import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeavedetailPage } from './leavedetail.page';

const routes: Routes = [
  {
    path: '',
    component: LeavedetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeavedetailPageRoutingModule {}
