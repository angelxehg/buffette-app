import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { LayoutsModule } from 'src/app/layouts/layouts.module';

@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    LayoutsModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
