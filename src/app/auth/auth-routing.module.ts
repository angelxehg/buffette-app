import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoAuthGuard } from '../guards/no-auth.guard';
import { CentralCardLayoutComponent } from '../layouts/central-card-layout/central-card-layout.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: CentralCardLayoutComponent,
    children: [
      {
        path: 'login',
        canActivate: [NoAuthGuard],
        component: LoginComponent
      },
      {
        path: '',
        redirectTo: '/auth/login',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule { }
