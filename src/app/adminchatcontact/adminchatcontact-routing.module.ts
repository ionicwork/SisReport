import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminchatcontactPage } from './adminchatcontact.page';

const routes: Routes = [
  {
    path: '',
    component: AdminchatcontactPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminchatcontactPageRoutingModule {}
