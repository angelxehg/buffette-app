import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, of } from 'rxjs';

export const AuthServiceMock = {
  sessionStatus: of(false)
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public sessionStatus = new BehaviorSubject<boolean>(null);

  constructor(private router: Router) {
    if (1 === 1) {
      // Load session from storage
      setTimeout((obs: BehaviorSubject<boolean>) => {
        this.sessionStatus.next(false);
      }, 1000, this.sessionStatus);
    } else {
      // Do not load from storage
    }
  }

  public login(): void {
    this.sessionStatus.next(true);
    this.router.navigateByUrl('/home');
  }

  public logout(): void {
    this.sessionStatus.next(false);
    this.router.navigateByUrl('/auth/login');
  }
}
