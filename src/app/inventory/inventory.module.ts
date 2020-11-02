import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryPageComponent } from './inventory-page/inventory-page.component';
import { LayoutsModule } from '../layouts/layouts.module';
import { InventoryRoutingModule } from './inventory-routing.module';

@NgModule({
  declarations: [
    InventoryPageComponent
  ],
  imports: [
    CommonModule,
    LayoutsModule,
    InventoryRoutingModule
  ]
})
export class InventoryModule { }
