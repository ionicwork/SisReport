import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserallcontactsPage } from './userallcontacts.page';

const routes: Routes = [
  {
    path: '',
    component: UserallcontactsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserallcontactsPageRoutingModule {}
