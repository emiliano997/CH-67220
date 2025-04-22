import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './featured/students/students.component';
import { CoursesComponent } from './featured/courses/courses.component';
import { HomeComponent } from './featured/home/home.component';
import { DetailsComponent } from './featured/courses/pages/details/details.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'students',
    component: StudentsComponent,
  },
  {
    path: 'courses',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: CoursesComponent,
      },
      {
        path: ':title',
        component: DetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
