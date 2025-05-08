import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { RootState } from '../../core/store';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  authUser: Observable<any>;
  authUser$: Observable<any>;

  constructor(
    private router: Router,
    private authService: AuthService,
    private store: Store<RootState>
  ) {
    this.authUser = this.authService.authUser$;
    this.authUser$ = this.store.select((state) => state.auth.authUser);
    console.log(this.authUser);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/auth']);
  }
}
