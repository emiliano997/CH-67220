import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../../../../shared/components/dialog/dialog.component';
import { CourseService } from '../../../../../core/services/course.service';

import { v4 as uuidv4 } from 'uuid';
import { Course } from '../../interfaces/Course';

@Component({
  selector: 'course-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  formGroup: FormGroup;
  isEdit: boolean = false;

  constructor(
    private courseService: CourseService,
    private fb: FormBuilder,
    private matDialog: MatDialog
  ) {
    this.formGroup = this.fb.group({
      id: [''],
      title: [''],
      description: [''],
    });

    this.courseService.courseEdit$.subscribe((course) => {
      if (course) {
        this.formGroup.patchValue({
          id: course.id,
          title: course.title,
          description: course.description,
        });
        this.isEdit = true;
      } else {
        this.formGroup.reset();
      }
    });
  }

  submit() {
    this.formGroup.patchValue({
      id: this.isEdit ? this.formGroup.value.id : uuidv4(),
    });

    this.matDialog
      .open(DialogComponent)
      .afterClosed()
      .subscribe({
        next: (confirmed: boolean) => {
          if (confirmed) {
            console.log(this.formGroup.value);
            if (this.isEdit) {
              this.courseService.updateCourse(this.formGroup.value);
            } else {
              this.courseService.addCourse(this.formGroup.value);
            }

            this.formGroup.reset();
            this.isEdit = false;
          }
        },
        error: (error) => {
          console.error('Error:', error);
        },
      });
  }
}
