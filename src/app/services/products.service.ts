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

  public async index(): Promise<Product[]> {
    // HTTP requests
    return new Promise<Product[]>((resolve, reject) => {
      setTimeout((obs: BehaviorSubject<Product[]>) => {
        const products = obs.value;
        // Mock data
        if (products.length === 0) {
          for (let i = 1; i <= 5; i++) {
            products.push({
              id: i,
              code: `0XYZ000${i}`,
              title: `Producto ${i}`,
              brand: 'Marca A',
              existencias: 0
            });
          }
        }
        // Save in storage
        obs.next(products);
        localStorage.setItem('PRODUCTS', JSON.stringify(products));
        resolve(products);
      }, 1500, this.items$);
    });
  }

  public async create(product: Product): Promise<Product> {
    // HTTP requests
    return new Promise<Product>((resolve, reject) => {
      setTimeout((obs: BehaviorSubject<Product[]>, newProduct: Product) => {
        const products: Product[] = obs.value;
        products.push(product);
        resolve(newProduct);
      }, 1500, this.items$, product);
    });
  }
}
