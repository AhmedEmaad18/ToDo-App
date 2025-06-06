import { Routes } from '@angular/router';
import { authGuard } from './shared/guard/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./component/auth/login/login.component').then(c => c.LoginComponent)
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('./component/auth/signup/signup.component').then(c => c.SignupComponent)
  },
  {
    path: 'dashboard',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./component/dashboard/dashboard.component').then(c => c.DashboardComponent)
  },
  {
    path: 'update-task/:id',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./component/update-task/update-task.component').then(c => c.UpdateTaskComponent)
  },
  {
    path: 'create-task',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./component/create-task/create-task.component').then(c => c.CreateTaskComponent)
  },
  {
    path: 'task-view/:id',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./component/task-view/task-view.component').then(c => c.TaskViewComponent)
  }
  ,
  {
    path: 'aboutus',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./component/aboutus/aboutus.component').then(c => c.AboutusComponent)
  },{
    path: 'contactus',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./component/contactus/contactus.component').then(c => c.ContactusComponent)
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];
