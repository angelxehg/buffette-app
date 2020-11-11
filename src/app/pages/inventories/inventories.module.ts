import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoriesComponent } from './inventories.component';
import { InventoriesRoutingModule } from './inventories-routing.module';

@NgModule({
  declarations: [
    InventoriesComponent
  ],
  imports: [
    CommonModule,
    InventoriesRoutingModule
  ]
})
export class InventoriesModule { }
