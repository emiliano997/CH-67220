import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../featured/auth/interfaces/User';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { RootState } from '../store';
import { setAuthUser, unsetAuthUser } from '../store/auth/auth.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _authUser = new BehaviorSubject<User | null>(null);
  authUser$ = this._authUser.asObservable();

  private TOKEN = 'my_secret_token';

  private users = [
    {
      email: 'emi@gmail.com',
      password: '1234',
      role: 'admin',
    },
    {
      email: 'sofi@gmail.com',
      password: '1234',
      role: 'user',
    },
    {
      email: 'aldo@gmail.com',
      password: '1234',
      role: 'user',
    },
  ];

  constructor(private store: Store<RootState>) {}

  login(email: string, password: string): boolean {
    // Chequear que los datos sean correctos
    const user = this.users.find(
      (user) => user.email === email && user.password === password
    );

    if (!user) {
      return false;
    }

    this.store.dispatch(
      setAuthUser({
        payload: user,
      })
    );

    this._authUser.next(user);

    localStorage.setItem('token', this.TOKEN);
    // localStorage.setItem('user', JSON.stringify(user));

    return true;
  }

  getRole() {
    return this.authUser$;
  }

  verifyToken(): Observable<boolean> {
    const token = localStorage.getItem('token');

    return of(token === this.TOKEN);
  }

  logout() {
    this._authUser.next(null);
    localStorage.removeItem('token');
    this.store.dispatch(unsetAuthUser());
  }
}
