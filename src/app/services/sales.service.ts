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
      }, 1500, this.items$);
    });
  }
}
