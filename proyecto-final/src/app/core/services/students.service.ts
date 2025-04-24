import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { Student } from '../../featured/dashboard/students/interfaces/Student';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  private dataSubject = new BehaviorSubject<Student[]>([]);
  students$ = this.dataSubject.asObservable();

  private _students: Student[] = [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@gmail.com',
      course: 'angular',
    },
    {
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane@gmail.com',
      course: 'react',
    },
  ];

  getStudents(): Student[] {
    return this._students;
  }

  getStudentsPromise(): Promise<Student[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this._students);
      }, 2000);
    });
  }

  getStudentsObs() {
    this.dataSubject.next(this._students);
  }

  addStudent(student: Student): void {
    this._students.push(student);
  }

  addStudentObs(student: Student) {
    this._students = [...this._students, student];
    this.dataSubject.next(this._students);
  }

  constructor() {}
}
