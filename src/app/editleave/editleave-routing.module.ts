import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditleavePage } from './editleave.page';

const routes: Routes = [
  {
    path: '',
    component: EditleavePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditleavePageRoutingModule {}
