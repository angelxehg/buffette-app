import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoriesComponent } from './inventories.component';
import { InventoriesRoutingModule } from './inventories-routing.module';
import { InventoryDetailsComponent } from './inventory-details/inventory-details.component';
import { LayoutsModule } from 'src/app/layouts/layouts.module';

@NgModule({
  declarations: [
    InventoriesComponent,
    InventoryDetailsComponent
  ],
  imports: [
    CommonModule,
    LayoutsModule,
    InventoriesRoutingModule
  ]
})
export class InventoriesModule { }
