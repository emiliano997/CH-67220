import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Course } from '../../featured/dashboard/courses/interfaces/Course';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private coursesSubject = new BehaviorSubject<Course[]>([]);
  courses$ = this.coursesSubject.asObservable();

  private coursesTitlesSubject = new BehaviorSubject<string[]>([]);
  coursesTitles$ = this.coursesTitlesSubject.asObservable();

  // Fuente de datos
  private _courses: Course[] = [
    {
      title: 'Angular',
      description: 'Angular es un framework para construir aplicaciones web',
    },
    {
      title: 'React',
      description: 'React es una librería para construir interfaces de usuario',
    },
    {
      title: 'Vue',
      description:
        'Vue es un framework progresivo para construir interfaces de usuario',
    },
    {
      title: 'Svelte',
      description: 'Svelte es un framework para construir aplicaciones web',
    },
  ];

  getCourses(): void {
    this.coursesSubject.next(this._courses);
  }

  getCoursesTitles(): void {
    const names = this._courses.map((course) => course.title);
    this.coursesTitlesSubject.next(names);
  }

  addCourse(course: Course): void {
    this._courses = [...this._courses, course];
    this.coursesSubject.next(this._courses);
    this.coursesTitlesSubject.next(this._courses.map((course) => course.title));
  }

  getByTitle(title: string) {
    return new Observable<Course>((subscriber) => {
      const course = this._courses.find(
        (course) => course.title.toLowerCase() === title.toLowerCase()
      );

      if (course) {
        subscriber.next(course);
      } else {
        subscriber.error('Course not found');
      }
    });
  }
}
