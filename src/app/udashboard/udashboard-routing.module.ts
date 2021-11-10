import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UdashboardPage } from './udashboard.page';

const routes: Routes = [
  {
    path: '',
    component: UdashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UdashboardPageRoutingModule {}
