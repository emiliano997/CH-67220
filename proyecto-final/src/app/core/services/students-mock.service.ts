import { Inject, Injectable } from '@angular/core';
import { Student } from '../interfaces/Student';
import { APP_CONFIG, AppConfig } from '../../core/injection-token';

@Injectable({
  providedIn: 'root',
})
export class StudentsMockService {
  constructor(@Inject(APP_CONFIG) private config: AppConfig) {
    console.log(config);
  }

  addStudent(student: Student) {
    console.log('Student added:', student);
  }

  getStudents(): void {
    console.log('Fetching students...');
  }
}
