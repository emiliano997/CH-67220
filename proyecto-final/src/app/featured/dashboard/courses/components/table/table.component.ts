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
  displayedColumns: string[] = ['id', 'title', 'description', 'see-more'];
  dataSource: Course[] = [];

  constructor(
    private courseService: CourseService,
    @Inject('TITLE') private title: string
  ) {}

  ngOnInit(): void {
    this.courseService.getCourses();
    this.courseService.courses$.subscribe({
      next: (data) => {
        console.log(data);
        this.dataSource = data;
      },
      error: (error) => {
        console.error('Error fetching courses:', error);
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
