import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { filter } from 'rxjs/operators';

export const AuthServiceMock = {
  sessionStatus: of(false)
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public sessionStatus = new BehaviorSubject<boolean>(null);

  constructor() {
    this.sessionStatus.pipe(
      filter(val => val !== null)
    ).subscribe(val => {
      console.log(val);
    });
    if (1 === 1) {
      // Load session from storage
      setTimeout((obs: BehaviorSubject<boolean>) => {
        this.sessionStatus.next(true);
      }, 5000, this.sessionStatus);
    } else {
      // Do not load from storage
    }
  }
}
