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
    try {
      const products: Product[] = JSON.parse(localStorage.getItem('PRODUCTS'));
      if (products) {
        this.items$.next(products);
      }
    } catch (error) {
      console.log(error);
    }
  }

  public index(): void {
    // HTTP requests
    setTimeout((obs: BehaviorSubject<Product[]>) => {
      if (obs.value.length === 0) {
        const products: Product[] = [
          { id: 1, code: '00001', title: 'Producto 1', brand: 'Marca A', existencias: 0 },
          { id: 2, code: '00002', title: 'Producto 2', brand: 'Marca A', existencias: 0 },
          { id: 3, code: '00003', title: 'Producto 3', brand: 'Marca A', existencias: 0 },
          { id: 4, code: '00004', title: 'Producto 3', brand: 'Marca A', existencias: 0 },
          { id: 5, code: '00005', title: 'Producto 3', brand: 'Marca A', existencias: 0 },
        ];
        obs.next(products);
        // Save in storage
        localStorage.setItem('PRODUCTS', JSON.stringify(products));
      } else {
        localStorage.setItem('PRODUCTS', JSON.stringify(obs.value));
      }
    }, 1500, this.items$);
  }
}
