import { createAction, props } from '@ngrx/store';

export const increment = createAction(
  '[Counter] increment',
  props<{ value: number }>()
);

export const decrement = createAction('[Counter] decrement');
