import { createFeatureSelector, createSelector } from '@ngrx/store';
import { counterFeatureName, CounterState } from './counter.reducer';

export const selectCounterState =
  createFeatureSelector<CounterState>(counterFeatureName);

export const selectCountValue = createSelector(
  selectCounterState,
  (state) => state.value
);

export const selectCounterValuex10 = createSelector(
  selectCountValue,
  (value) => value * 10
);

export const isValueEven = createSelector(
  selectCountValue,
  (value) => value % 2 === 0
);
