import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootState } from '../../../core/store';
import { Observable } from 'rxjs';
import { selectCountValue } from '../../../core/store/counter/counter.selectors';
import {
  decrement,
  increment,
} from '../../../core/store/counter/counter.actions';

@Component({
  selector: 'app-counter',
  standalone: false,
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  value$: Observable<number>;

  constructor(private store: Store<RootState>) {
    this.value$ = this.store.select(selectCountValue);
  }

  onIncrement() {
    this.store.dispatch(increment({ value: 1 }));
  }

  onDecrement() {
    this.store.dispatch(decrement());
  }
}
