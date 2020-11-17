import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { Inventory } from '../models/inventory';

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
export class InventoriesService {

  public items$ = new BehaviorSubject<Inventory[]>([]);

  constructor() {
    try {
      const inventories: Inventory[] = JSON.parse(localStorage.getItem('INVENTORIES'));
      if (inventories) {
        this.items$.next(inventories);
      }
    } catch (error) {
      console.log(error);
    }
  }

  public async index(): Promise<Inventory[]> {
    // HTTP requests
    return new Promise<Inventory[]>((resolve, reject) => {
      setTimeout((obs: BehaviorSubject<Inventory[]>) => {
        const inventories = obs.value;
        // Mock data
        if (inventories.length === 0) {
          for (let i = 1; i <= 5; i++) {
            inventories.push({
              id: i,
              date: 'Hoy, 12 de nov 14:11',
            });
          }
        }
        // Save in storage
        obs.next(inventories);
        localStorage.setItem('INVENTORIES', JSON.stringify(inventories));
        resolve(inventories);
      }, 200, this.items$);
    });
  }

  public async create(inventory: Inventory): Promise<Inventory> {
    // HTTP requests
    return new Promise<Inventory>((resolve, reject) => {
      setTimeout((obs: BehaviorSubject<Inventory[]>, newInventory: Inventory) => {
        const inventories: Inventory[] = obs.value;
        inventory.id = inventories.length + 1;
        inventories.push(inventory);
        resolve(newInventory);
      }, 500, this.items$, inventory);
    });
  }

  public async find(id: string): Promise<Inventory> {
    // HTTP requests
    return new Promise<Inventory>((resolve, reject) => {
      setTimeout((obs: BehaviorSubject<Inventory[]>) => {
        const sale = obs.value.find(i => i.id.toString() === id);
        if (sale) {
          resolve(sale);
        } else {
          reject('Inventory not found');
        }
      }, 200, this.items$);
    });
  }

  public async update(sale: Inventory): Promise<Inventory> {
    // HTTP requests
    return new Promise<Inventory>((resolve, reject) => {
      setTimeout((obs: BehaviorSubject<Inventory[]>, updated: Inventory) => {
        const originals = obs.value;
        const original = originals.find(i => i.id === sale.id);
        //
        original.date = updated.date;
        //
        resolve(original);
      }, 500, this.items$, sale);
    });
  }

  public async delete(sale: Inventory): Promise<void> {
    // HTTP requests
    return new Promise((resolve, reject) => {
      setTimeout((obs: BehaviorSubject<Inventory[]>, deleted: Inventory) => {
        const updated = obs.value.filter(i => i.id !== deleted.id);
        obs.next(updated);
        resolve();
      }, 500, this.items$, sale);
    });
  }
}
