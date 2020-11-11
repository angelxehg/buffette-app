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
    const token = localStorage.getItem('JWT_TOKEN');
    if (token) {
      this.sessionStatus.next(true);
    } else {
      this.sessionStatus.next(false);
    }
  }

  public login(): void {
    localStorage.setItem('JWT_TOKEN', 'dummy_token');
    this.sessionStatus.next(true);
    this.router.navigateByUrl('/home');
  }

  public logout(): void {
    localStorage.removeItem('JWT_TOKEN');
    this.sessionStatus.next(false);
    this.router.navigateByUrl('/auth/login');
  }
}
