import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [FormComponent, TableComponent],
  imports: [CommonModule, SharedModule],
  exports: [FormComponent, TableComponent],
})
export class CoursesModule {}
