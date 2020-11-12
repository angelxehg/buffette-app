import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesComponent } from './sales.component';
import { SalesRoutingModule } from './sales-routing.module';
import { LayoutsModule } from 'src/app/layouts/layouts.module';
import { SaleDetailsComponent } from './sale-details/sale-details.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SalesComponent,
    SaleDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    LayoutsModule,
    SalesRoutingModule
  ]
})
export class SalesModule { }
