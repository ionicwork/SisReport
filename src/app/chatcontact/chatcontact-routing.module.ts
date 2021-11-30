import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatcontactPage } from './chatcontact.page';

const routes: Routes = [
  {
    path: '',
    component: ChatcontactPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatcontactPageRoutingModule {}
