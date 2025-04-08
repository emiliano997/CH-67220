import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../../shared/components/dialog/dialog.component';

@Component({
  selector: 'student-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  formGroup: FormGroup;

  constructor(private fb: FormBuilder, private matDialog: MatDialog) {
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
            this.formGroup.reset();
          }
        },
        error: (error) => {
          console.error('Error:', error);
        },
      });
  }
}
