import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewConcertPage } from './new-concert.page';

const routes: Routes = [
  {
    path: '',
    component: NewConcertPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewConcertPageRoutingModule {}
