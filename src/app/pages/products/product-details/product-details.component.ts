import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product: Product;

  constructor(private service: ProductsService) { }

  ngOnInit(): void {
    this.product = {
      id: 0,
      code: '',
      title: '',
      brand: '',
      existencias: 0
    };
  }

  save(): void {
    this.service.create(this.product);
  }

}
