import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesComponent } from './sales.component';
import { SalesRoutingModule } from './sales-routing.module';
import { LayoutsModule } from 'src/app/layouts/layouts.module';

@NgModule({
  declarations: [
    SalesComponent
  ],
  imports: [
    CommonModule,
    LayoutsModule,
    SalesRoutingModule
  ]
})
export class SalesModule { }
