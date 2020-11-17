import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoriesComponent } from './inventories.component';
import { InventoriesRoutingModule } from './inventories-routing.module';
import { InventoryDetailsComponent } from './inventory-details/inventory-details.component';
import { LayoutsModule } from 'src/app/layouts/layouts.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    InventoriesComponent,
    InventoryDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    LayoutsModule,
    InventoriesRoutingModule
  ]
})
export class InventoriesModule { }
