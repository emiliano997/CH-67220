import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Course } from '../../featured/dashboard/courses/interfaces/Course';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private coursesSubject = new BehaviorSubject<Course[]>([]);
  courses$ = this.coursesSubject.asObservable();

  private coursesTitlesSubject = new BehaviorSubject<string[]>([]);
  coursesTitles$ = this.coursesTitlesSubject.asObservable();

  courseEdit = new BehaviorSubject<Course | null>(null);
  courseEdit$ = this.courseEdit.asObservable();

  constructor(private http: HttpClient) {}

  // Fuente de datos
  private _courses: Course[] = [];

  setUpdateCourse(id: string) {
    const course = this._courses.find((course) => course.id === id);

    if (!course) {
      alert('Course not found');
      return;
    }
    this.courseEdit.next(course);
  }

  updateCourse(course: Course) {
    this.http
      .put<Course>(`${environment.apiUrl}/courses/${course.id}`, course)
      .subscribe({
        next: (course) => {
          this._courses = this._courses.map((c) =>
            c.id === course.id ? course : c
          );
          this.coursesSubject.next(this._courses);
          this.coursesTitlesSubject.next(
            this._courses.map((course) => course.title)
          );
          this.courseEdit.next(null);
        },
        error: (error) => {
          console.error('Error updating course:', error);
        },
      });
  }

  getCourses() {
    this.coursesSubject.next(this._courses);
    this.http
      .get<Course[]>(`${environment.apiUrl}/courses`)
      .subscribe((courses) => {
        this._courses = courses;
        this.coursesSubject.next(this._courses);
        this.coursesTitlesSubject.next(
          this._courses.map((course) => course.title)
        );
      });
  }

  getCoursesTitles(): void {
    const names = this._courses.map((course) => course.title);
    this.coursesTitlesSubject.next(names);
  }

  addCourse(course: Course): void {
    this.http.post<Course>(`${environment.apiUrl}/courses`, course).subscribe({
      next: (course) => {
        this._courses = [...this._courses, course];
        this.coursesSubject.next(this._courses);
        this.coursesTitlesSubject.next(
          this._courses.map((course) => course.title)
        );
      },
      error: (error) => {
        console.error('Error adding course:', error);
      },
    });
  }

  deleteCourse(id: string) {
    this.http.delete<Course>(`${environment.apiUrl}/courses/${id}`).subscribe({
      next: (course) => {
        this._courses = this._courses.filter((course) => course.id !== id);
        this.coursesSubject.next(this._courses);
        this.coursesTitlesSubject.next(
          this._courses.map((course) => course.title)
        );
      },
      error: (error) => {
        console.error('Error deleting course:', error);
      },
    });
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
