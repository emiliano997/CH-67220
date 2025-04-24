import { Component, Inject, OnInit } from '@angular/core';
import { Course } from '../../interfaces/Course';
import { CourseService } from '../../../../../core/services/course.service';

@Component({
  selector: 'course-table',
  standalone: false,
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['title', 'description', 'see-more'];
  dataSource: Course[] = [];

  constructor(
    private courseService: CourseService,
    @Inject('TITLE') private title: string
  ) {}

  ngOnInit(): void {
    this.courseService.getCourses();
    this.courseService.courses$.subscribe((data) => {
      console.log(data);
      this.dataSource = data;
    });
  }
}
