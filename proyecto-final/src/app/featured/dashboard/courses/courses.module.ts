import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableComponent } from './components/table/table.component';
import { FormComponent } from './components/form/form.component';
import { SharedModule } from '../../../shared/shared.module';
import { CoursesComponent } from './courses.component';
import { DetailsComponent } from './pages/details/details.component';
import { provideState, StoreModule } from '@ngrx/store';
import { courseFeature } from './store/courses.reducer';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import { CoursesEffects } from './store/courses.effects';

@NgModule({
  declarations: [
    FormComponent,
    TableComponent,
    CoursesComponent,
    DetailsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature(courseFeature),
    EffectsModule.forFeature([CoursesEffects]),
  ],
  exports: [CoursesComponent],
})
export class CoursesModule {}
