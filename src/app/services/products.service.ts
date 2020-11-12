import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { Product } from '../models/product';

export const ProductsServiceMock = {
  items$: of([]),
  index: () => of([]).toPromise(),
  create: () => of({}).toPromise(),
  find: () => of({}).toPromise(),
  update: () => of({}).toPromise(),
  delete: () => of({}).toPromise()
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
              existencias: 10
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

  public async find(code: string): Promise<Product> {
    // HTTP requests
    return new Promise<Product>((resolve, reject) => {
      setTimeout((obs: BehaviorSubject<Product[]>) => {
        const product = obs.value.find(i => i.code === code);
        if (product) {
          resolve(product);
        } else {
          reject('Product not found');
        }
      }, 500, this.items$);
    });
  }

  public async update(product: Product): Promise<Product> {
    // HTTP requests
    return new Promise<Product>((resolve, reject) => {
      setTimeout((obs: BehaviorSubject<Product[]>, updated: Product) => {
        const originals = obs.value;
        const original = originals.find(i => i.id === product.id);
        //
        original.code = updated.code;
        original.title = updated.title;
        original.brand = updated.brand;
        //
        resolve(original);
      }, 1500, this.items$, product);
    });
  }

  public async delete(product: Product): Promise<void> {
    // HTTP requests
    return new Promise((resolve, reject) => {
      setTimeout((obs: BehaviorSubject<Product[]>, deleted: Product) => {
        const updated = obs.value.filter(i => i.id !== deleted.id);
        obs.next(updated);
        resolve();
      }, 1500, this.items$, product);
    });
  }
}
