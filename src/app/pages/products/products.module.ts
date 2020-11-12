import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { LayoutsModule } from 'src/app/layouts/layouts.module';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    LayoutsModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
