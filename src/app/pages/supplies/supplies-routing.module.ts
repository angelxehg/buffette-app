import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SuppliesComponent } from './supplies.component';
import { SupplyDetailsComponent } from './supply-details/supply-details.component';

const routes: Routes = [
  {
    path: '',
    component: SuppliesComponent
  },
  {
    path: 'new',
    component: SupplyDetailsComponent
  },
  {
    path: ':id',
    component: SupplyDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuppliesRoutingModule { }
