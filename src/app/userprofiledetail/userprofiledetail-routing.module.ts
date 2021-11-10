import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserprofiledetailPage } from './userprofiledetail.page';

const routes: Routes = [
  {
    path: '',
    component: UserprofiledetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserprofiledetailPageRoutingModule {}
