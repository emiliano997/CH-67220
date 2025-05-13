import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { CoursesActions } from './courses.actions';
import { catchError, concatMap, map } from 'rxjs';
import { CourseService } from '../../../../core/services/course.service';

@Injectable()
export class CoursesEffects {
  loadCoursess$ = createEffect(() => {
    console.log(this.actions$);

    return this.actions$.pipe(
      ofType(CoursesActions.loadCourses),
      concatMap(() =>
        this.coursesService.getCourses().pipe(
          map((courses) => {
            console.log('loadCourses', courses);
            return CoursesActions.loadCoursesSuccess({ courses });
          }),
          catchError((error) => {
            console.error('Error loading courses:', error);
            return [CoursesActions.loadCoursesFailure({ error })];
          })
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private coursesService: CourseService
  ) {
    this.actions$ = inject(Actions);
  }
}
