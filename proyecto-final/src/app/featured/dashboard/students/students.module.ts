import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDialogModule } from '@angular/material/dialog';

import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { SharedModule } from '../../../shared/shared.module';
import { APP_CONFIG } from '../../../core/injection-token';
import { config } from 'rxjs';
import { StudentsComponent } from './students.component';
import { FormComponent } from './components/form/form.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [FormComponent, TableComponent, StudentsComponent],
  imports: [CommonModule, SharedModule, MatDialogModule],
  exports: [StudentsComponent],
  providers: [
    // {
    //   provide: StudentsService,
    //   useClass: StudentsMockService,
    // },
    {
      provide: 'TITLE',
      useValue: 'Student Management',
    },
    {
      provide: APP_CONFIG,
      useValue: config,
    },
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' },
    },
  ],
})
export class StudentsModule {}
