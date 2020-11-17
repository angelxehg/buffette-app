import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { Sale } from '../models/sale';

export const SalesServiceMock = {
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
export class SalesService {

  public items$ = new BehaviorSubject<Sale[]>([]);

  constructor() {
    try {
      const sales: Sale[] = JSON.parse(localStorage.getItem('SALES'));
      if (sales) {
        this.items$.next(sales);
      }
    } catch (error) {
      console.log(error);
    }
  }

  public async index(): Promise<Sale[]> {
    // HTTP requests
    return new Promise<Sale[]>((resolve, reject) => {
      setTimeout((obs: BehaviorSubject<Sale[]>) => {
        const sales = obs.value;
        // Mock data
        if (sales.length === 0) {
          for (let i = 1; i <= 5; i++) {
            sales.push({
              id: i,
              date: 'Hoy, 12 de nov 14:11',
              by: 'Angel Hurtado',
              amount: 50
            });
          }
        }
        // Save in storage
        obs.next(sales);
        localStorage.setItem('SALES', JSON.stringify(sales));
        resolve(sales);
      }, 200, this.items$);
    });
  }

  public async create(sale: Sale): Promise<Sale> {
    // HTTP requests
    return new Promise<Sale>((resolve, reject) => {
      setTimeout((obs: BehaviorSubject<Sale[]>, newSale: Sale) => {
        const sales: Sale[] = obs.value;
        sale.id = sales.length + 1;
        sales.push(sale);
        resolve(newSale);
      }, 500, this.items$, sale);
    });
  }

  public async find(id: string): Promise<Sale> {
    // HTTP requests
    return new Promise<Sale>((resolve, reject) => {
      setTimeout((obs: BehaviorSubject<Sale[]>) => {
        const sale = obs.value.find(i => i.id.toString() === id);
        if (sale) {
          resolve(sale);
        } else {
          reject('Sale not found');
        }
      }, 200, this.items$);
    });
  }

  public async update(sale: Sale): Promise<Sale> {
    // HTTP requests
    return new Promise<Sale>((resolve, reject) => {
      setTimeout((obs: BehaviorSubject<Sale[]>, updated: Sale) => {
        const originals = obs.value;
        const original = originals.find(i => i.id === sale.id);
        //
        original.date = updated.date;
        original.by = updated.by;
        original.amount = updated.amount;
        //
        resolve(original);
      }, 500, this.items$, sale);
    });
  }

  public async delete(sale: Sale): Promise<void> {
    // HTTP requests
    return new Promise((resolve, reject) => {
      setTimeout((obs: BehaviorSubject<Sale[]>, deleted: Sale) => {
        const updated = obs.value.filter(i => i.id !== deleted.id);
        obs.next(updated);
        resolve();
      }, 500, this.items$, sale);
    });
  }
}
