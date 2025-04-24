import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../../../../shared/components/dialog/dialog.component';
import { CourseService } from '../../../../../core/services/course.service';

@Component({
  selector: 'course-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  formGroup: FormGroup;

  constructor(
    private courseService: CourseService,
    private fb: FormBuilder,
    private matDialog: MatDialog
  ) {
    this.formGroup = this.fb.group({
      title: [''],
      description: [''],
    });
  }

  submit() {
    this.matDialog
      .open(DialogComponent)
      .afterClosed()
      .subscribe({
        next: (confirmed: boolean) => {
          if (confirmed) {
            console.log(this.formGroup.value);
            this.courseService.addCourse(this.formGroup.value);
            this.formGroup.reset();
          }
        },
        error: (error) => {
          console.error('Error:', error);
        },
      });
  }
}
