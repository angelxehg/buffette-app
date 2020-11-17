import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoriesComponent } from './inventories.component';
import { InventoriesRoutingModule } from './inventories-routing.module';
import { InventoryDetailsComponent } from './inventory-details/inventory-details.component';

@NgModule({
  declarations: [
    InventoriesComponent,
    InventoryDetailsComponent
  ],
  imports: [
    CommonModule,
    InventoriesRoutingModule
  ]
})
export class InventoriesModule { }
