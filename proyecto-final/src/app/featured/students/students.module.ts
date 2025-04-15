import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { TableComponent } from './components/table/table.component';

import { MatDialogModule } from '@angular/material/dialog';

import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { SharedModule } from '../../shared/shared.module';
import { APP_CONFIG } from '../../core/injection-token';
import { config } from 'rxjs';

@NgModule({
  declarations: [FormComponent, TableComponent],
  imports: [CommonModule, SharedModule, MatDialogModule],
  exports: [FormComponent, TableComponent],
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
