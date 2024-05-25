import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReactpagePage } from './reactpage.page';

const routes: Routes = [
  {
    path: '',
    component: ReactpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReactpagePageRoutingModule {}
