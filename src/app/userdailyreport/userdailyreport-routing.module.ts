import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserdailyreportPage } from './userdailyreport.page';

const routes: Routes = [
  {
    path: '',
    component: UserdailyreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserdailyreportPageRoutingModule {}
