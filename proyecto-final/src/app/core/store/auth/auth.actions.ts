import { createAction, props } from '@ngrx/store';

export const setAuthUser = createAction(
  '[Auth] setAuthUser',
  props<{ payload: { email: string; password: string; role: string } }>()
);

export const unsetAuthUser = createAction('[Auth] unsetAuthUser');
