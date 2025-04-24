import { Component, Inject, OnInit } from '@angular/core';
import { Student } from '../../interfaces/Student';
import { StudentsService } from '../../../../../core/services/students.service';

@Component({
  selector: 'student-table',
  standalone: false,
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'course'];
  dataSource: Student[] = [];

  constructor(
    private studentsService: StudentsService,
    @Inject('TITLE') private title: string
  ) {}

  ngOnInit(): void {
    this.studentsService.getStudentsObs();
    this.studentsService.students$.subscribe((data) => {
      console.log(data);
      this.dataSource = data;
    });

    this.studentsService
      .getStudentsPromise()
      .then((value) => {
        console.log(value);
      })
      .catch((error) => console.log(error));
  }
}
