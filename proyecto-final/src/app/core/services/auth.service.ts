import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../featured/auth/interfaces/User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authUser: User | null = null;

  constructor() {}

  login(email: string, password: string): boolean {
    // Chequear que los datos sean correctos
    if (email !== 'emi@gmail.com' || password !== '1234') {
      return false;
    }

    this.authUser = {
      email,
      role: 'admin',
    };

    return true;
  }

  logout() {
    this.authUser = null;
  }
}
