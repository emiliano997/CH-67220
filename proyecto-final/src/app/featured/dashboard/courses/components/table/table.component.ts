import { Component, Inject, OnInit } from '@angular/core';
import { Course } from '../../interfaces/Course';
import { CourseService } from '../../../../../core/services/course.service';
import { Store } from '@ngrx/store';
import { RootState } from '../../../../../core/store';
import { Observable } from 'rxjs';
import {
  selectCourses,
  selectError,
  selectIsLoading,
} from '../../store/courses.selectors';
import { CoursesActions } from '../../store/courses.actions';
import { CoursesState } from '../../store/courses.reducer';

@Component({
  selector: 'course-table',
  standalone: false,
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'description', 'see-more'];
  dataSource: Course[] = [];

  courses$: Observable<Course[]>;
  isLoading$: Observable<boolean>;
  error$: Observable<any>;

  constructor(
    private courseService: CourseService,
    private store: Store<RootState> // @Inject('TITLE') private title: string
  ) {
    this.courses$ = this.store.select(selectCourses);
    this.isLoading$ = this.store.select(selectIsLoading);
    this.error$ = this.store.select(selectError);
  }

  ngOnInit(): void {
    // this.courseService.getCourses();
    // this.courseService.courses$.subscribe({
    //   next: (data) => {
    //     console.log(data);
    //     this.dataSource = data;
    //   },
    //   error: (error) => {
    //     console.error('Error fetching courses:', error);
    //   },
    // });

    this.store.dispatch(CoursesActions.loadCourses());
    this.store.select(selectCourses).subscribe({
      next: (courses) => {
        console.log('Courses from store:', courses);
        this.dataSource = courses;
      },
      error: (error) => {
        console.error('Error fetching courses from store:', error);
      },
    });
  }

  deleteCourse(id: string) {
    this.courseService.deleteCourse(id);
  }

  editCourse(id: string) {
    this.courseService.setUpdateCourse(id);
  }
}
