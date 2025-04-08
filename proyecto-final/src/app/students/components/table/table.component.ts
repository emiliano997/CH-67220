import { Component } from '@angular/core';
import { Student } from '../../interfaces/Student';

@Component({
  selector: 'student-table',
  standalone: false,
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'course'];
  dataSource: Student[] = [];

  students: Student[] = [
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

  constructor() {
    this.dataSource = this.students;
  }
}
