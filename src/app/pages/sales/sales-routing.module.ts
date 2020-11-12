import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaleDetailsComponent } from './sale-details/sale-details.component';

import { SalesComponent } from './sales.component';

const routes: Routes = [
  {
    path: '',
    component: SalesComponent
  },
  {
    path: 'new',
    component: SaleDetailsComponent
  },
  {
    path: ':id',
    component: SaleDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalesRoutingModule { }
