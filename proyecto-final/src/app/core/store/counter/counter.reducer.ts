import { createReducer, on } from '@ngrx/store';
import { decrement, increment } from './counter.actions';

export const counterFeatureName = 'counter';

export interface CounterState {
  value: number;
}

const intialState: CounterState = {
  value: 0,
};

export const counterReducer = createReducer<CounterState>(
  intialState,
  on(increment, (state: CounterState, props) => {
    return {
      ...state,
      value: state.value + props.value,
    };
  }),
  on(decrement, (state) => ({
    ...state,
    value: state.value - 1,
  }))
);
