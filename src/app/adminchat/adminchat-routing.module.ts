import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminchatPage } from './adminchat.page';

const routes: Routes = [
  {
    path: '',
    component: AdminchatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminchatPageRoutingModule {}
