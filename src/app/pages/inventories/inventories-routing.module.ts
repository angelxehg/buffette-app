import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InventoriesComponent } from './inventories.component';
import { InventoryDetailsComponent } from './inventory-details/inventory-details.component';

const routes: Routes = [
  {
    path: '',
    component: InventoriesComponent
  },
  {
    path: 'new',
    component: InventoryDetailsComponent
  },
  {
    path: ':id',
    component: InventoryDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventoriesRoutingModule { }
