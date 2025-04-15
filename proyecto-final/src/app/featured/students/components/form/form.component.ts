import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { StudentsService } from '../../../../core/services/students.service';
import { APP_CONFIG, AppConfig } from '../../../../core/injection-token';
import { DialogComponent } from '../../../../shared/components/dialog/dialog.component';

@Component({
  selector: 'student-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  formGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    private matDialog: MatDialog,
    private studentsService: StudentsService,
    @Inject(APP_CONFIG) private config: AppConfig
  ) {
    console.log(config);

    this.formGroup = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      course: [''],
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
            this.studentsService.addStudentObs(this.formGroup.value);
            this.formGroup.reset();
          }
        },
        error: (error) => {
          console.error('Error:', error);
        },
      });
  }
}
