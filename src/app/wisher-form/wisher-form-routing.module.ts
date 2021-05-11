import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WisherFormPage } from './wisher-form.page';

const routes: Routes = [
  {
    path: '',
    component: WisherFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WisherFormPageRoutingModule {}
