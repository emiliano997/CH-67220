import { createReducer, on } from '@ngrx/store';
import { setAuthUser, unsetAuthUser } from './auth.actions';

export const authFeatureName = 'auth';

export interface AuthState {
  authUser: any | null;
}

const initialState: AuthState = {
  authUser: null,
};

export const authReducer = createReducer<AuthState>(
  initialState,
  on(setAuthUser, (state, { payload }) => ({
    ...state,
    authUser: payload,
  })),
  on(unsetAuthUser, (state) => ({
    ...state,
    authUser: null,
  }))
);
