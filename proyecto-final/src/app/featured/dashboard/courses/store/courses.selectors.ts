import { createFeatureSelector, createSelector } from '@ngrx/store';
import { coursesFeatureKey, CoursesState } from './courses.reducer';

export const selectCounterState =
  createFeatureSelector<CoursesState>(coursesFeatureKey);

export const selectCourses = createSelector(
  selectCounterState,
  (state) => state.courses
);

export const selectIsLoading = createSelector(
  selectCounterState,
  (state) => state.isLoading
);

export const selectError = createSelector(
  selectCounterState,
  (state) => state.error
);
