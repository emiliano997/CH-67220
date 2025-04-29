import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './featured/dashboard/dashboard.component';
import { authGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./featured/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    loadChildren: () =>
      import('./featured/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
    canActivate: [authGuard],
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
