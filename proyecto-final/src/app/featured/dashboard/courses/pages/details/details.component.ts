import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../../../../core/services/course.service';
import { Course } from '../../interfaces/Course';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-details',
  standalone: false,
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  course: Course | undefined;
  isLoading: boolean = true;
  error: string | undefined;

  constructor(
    private courseService: CourseService,
    private activatedRoute: ActivatedRoute
  ) {
    const title = this.activatedRoute.snapshot.paramMap.get('title');
    console.log(title);

    this.courseService.getByTitle(title!).subscribe({
      next: (course) => {
        this.isLoading = false;
        this.course = course;
        console.log(course);
      },
      error: (error) => {
        this.isLoading = false;
        console.error(error);
        this.error = error;
      },
    });
  }
}
