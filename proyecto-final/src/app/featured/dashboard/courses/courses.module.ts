import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableComponent } from './components/table/table.component';
import { FormComponent } from './components/form/form.component';
import { SharedModule } from '../../../shared/shared.module';
import { CoursesComponent } from './courses.component';
import { DetailsComponent } from './pages/details/details.component';

@NgModule({
  declarations: [
    FormComponent,
    TableComponent,
    CoursesComponent,
    DetailsComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [CoursesComponent],
})
export class CoursesModule {}
