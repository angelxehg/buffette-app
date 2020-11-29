import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SuppliesComponent } from './supplies.component';
import { SuppliesRoutingModule } from './supplies-routing.module';
import { LayoutsModule } from 'src/app/layouts/layouts.module';
import { SupplyDetailsComponent } from './supply-details/supply-details.component';

@NgModule({
  declarations: [
    SuppliesComponent,
    SupplyDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    LayoutsModule,
    SuppliesRoutingModule
  ]
})
export class SuppliesModule { }
