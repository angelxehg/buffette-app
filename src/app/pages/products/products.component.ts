import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [
    { id: 1, code: '00001', title: 'Producto 1', brand: 'Marca A' },
    { id: 2, code: '00002', title: 'Producto 2', brand: 'Marca A' },
    { id: 3, code: '00003', title: 'Producto 3', brand: 'Marca A' },
  ].map(template => new Product(template));

  constructor() { }

  ngOnInit(): void {
  }

}
