import { Component, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'shared-dialog',
  standalone: false,
  template: `
    <h2 mat-dialog-title>{{ title }}</h2>
    <mat-dialog-content>
      <p>{{ content }}</p>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button mat-dialog-close>Cancel</button>
      <button mat-flat-button (click)="submit()">Confirm</button>
    </mat-dialog-actions>
  `,
})
export class DialogComponent {
  title: string = 'Confirmation';

  content: string = 'Are you sure you want to submit the form?';

  constructor(private matDialogRef: MatDialogRef<DialogComponent>) {}

  submit() {
    this.matDialogRef.close(true);
  }
}
