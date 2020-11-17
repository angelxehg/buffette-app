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

  public async login(): Promise<void> {
    // HTTP requests
    return new Promise((resolve, reject) => {
      setTimeout((obs: BehaviorSubject<boolean>) => {
        localStorage.setItem('JWT_TOKEN', 'dummy_token');
        obs.next(true);
        resolve();
      }, 500, this.sessionStatus);
    });
  }

  public logout(): void {
    localStorage.removeItem('JWT_TOKEN');
    this.sessionStatus.next(false);
    this.router.navigateByUrl('/auth/login');
  }
}
