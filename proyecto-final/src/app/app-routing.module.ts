import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './featured/dashboard/home/home.component';
import { StudentsComponent } from './featured/dashboard/students/students.component';
import { CoursesComponent } from './featured/dashboard/courses/courses.component';
import { DetailsComponent } from './featured/dashboard/courses/pages/details/details.component';
import { LoginComponent } from './featured/auth/login/login.component';
import { DashboardComponent } from './featured/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'auth',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
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

        component: CoursesComponent,
      },
      {
        path: 'courses/:title',
        component: DetailsComponent,
      },
    ],
  },
  {
    path: '**', // Si la ruta no coincide con ninguna de las anteriores, redirige a la página de inicio
    redirectTo: 'auth',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
