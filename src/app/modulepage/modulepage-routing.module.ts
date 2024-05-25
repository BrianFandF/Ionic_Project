import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModulepagePage } from './modulepage.page';

const routes: Routes = [
  {
    path: '',
    component: ModulepagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModulepagePageRoutingModule {}
