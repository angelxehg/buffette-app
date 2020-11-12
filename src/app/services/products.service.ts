import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { Product } from '../models/product';

export const ProductsServiceMock = {
  items$: of([])
};

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public items$ = new BehaviorSubject<Product[]>([]);

  constructor() {
    const products: Product[] = [
      { id: 1, code: '00001', title: 'Producto 1', brand: 'Marca A', existencias: 0 },
      { id: 2, code: '00002', title: 'Producto 2', brand: 'Marca A', existencias: 0 },
      { id: 3, code: '00003', title: 'Producto 3', brand: 'Marca A', existencias: 0 },
    ];
    this.items$.next(products);
  }
}
