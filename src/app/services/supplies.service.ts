import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { Supply } from '../models/supply';

export const InventoriesServiceMock = {
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
export class SuppliesService {

  public items$ = new BehaviorSubject<Supply[]>([]);

  constructor() {
    try {
      const supplies: Supply[] = JSON.parse(localStorage.getItem('SUPPLIES'));
      if (supplies) {
        this.items$.next(supplies);
      }
    } catch (error) {
      console.log(error);
    }
  }

  public async index(): Promise<Supply[]> {
    // HTTP requests
    return new Promise<Supply[]>((resolve, reject) => {
      setTimeout((obs: BehaviorSubject<Supply[]>) => {
        const supplies = obs.value;
        // Mock data
        if (supplies.length === 0) {
          for (let i = 1; i <= 5; i++) {
            supplies.push({
              id: i,
              date: 'Hoy, 12 de nov 14:11',
            });
          }
        }
        // Save in storage
        obs.next(supplies);
        localStorage.setItem('SUPPLIES', JSON.stringify(supplies));
        resolve(supplies);
      }, 200, this.items$);
    });
  }

  public async create(inventory: Supply): Promise<Supply> {
    // HTTP requests
    return new Promise<Supply>((resolve, reject) => {
      setTimeout((obs: BehaviorSubject<Supply[]>, newSupply: Supply) => {
        const supplies: Supply[] = obs.value;
        inventory.id = supplies.length + 1;
        supplies.push(inventory);
        resolve(newSupply);
      }, 500, this.items$, inventory);
    });
  }

  public async find(id: string): Promise<Supply> {
    // HTTP requests
    return new Promise<Supply>((resolve, reject) => {
      setTimeout((obs: BehaviorSubject<Supply[]>) => {
        const sale = obs.value.find(i => i.id.toString() === id);
        if (sale) {
          resolve(sale);
        } else {
          reject('Supply not found');
        }
      }, 200, this.items$);
    });
  }

  public async update(sale: Supply): Promise<Supply> {
    // HTTP requests
    return new Promise<Supply>((resolve, reject) => {
      setTimeout((obs: BehaviorSubject<Supply[]>, updated: Supply) => {
        const originals = obs.value;
        const original = originals.find(i => i.id === sale.id);
        //
        original.date = updated.date;
        //
        resolve(original);
      }, 500, this.items$, sale);
    });
  }

  public async delete(sale: Supply): Promise<void> {
    // HTTP requests
    return new Promise((resolve, reject) => {
      setTimeout((obs: BehaviorSubject<Supply[]>, deleted: Supply) => {
        const updated = obs.value.filter(i => i.id !== deleted.id);
        obs.next(updated);
        resolve();
      }, 500, this.items$, sale);
    });
  }
}
