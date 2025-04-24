import { Component } from '@angular/core';
import {
  delay,
  forkJoin,
  from,
  interval,
  Observable,
  Observer,
  of,
} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  showFiller = false;
  showStudents = true;

  users!: Observable<any[]>;
  user!: Observable<any>;

  observables!: Observable<any[]>;

  // users!: Partial<Observer<[any, any]>>;
  // user!: Partial<Observer<[any, any]>>;

  constructor() {
    // const observable = interval(1000);
    // const subscription = observable.subscribe((value) => {
    //   console.log(value);
    // });
    // setTimeout(() => {
    //   subscription.unsubscribe();
    // }, 5000);
    // this.observables = forkJoin([
    //   from(
    //     fetch('https://jsonplaceholder.typicode.com/users').then((res) =>
    //       res.json()
    //     )
    //   ),
    //   this.getUser(),
    // ]);
    // this.observables.subscribe({
    //   next: (value) => {
    //     console.log(value);
    //   },
    // });
  }

  toggleStudents() {
    this.showStudents = !this.showStudents;
  }

  getUser(): Observable<any> {
    return of({
      username: 'John Doe',
      role: 'admin',
    }).pipe(delay(2000));
  }
}
