import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './AuthGaurd/authentication.guard';
import { ArchiveComponent } from './components/archive/archive.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import { GetAllNotesComponent } from './components/get-all-notes/get-all-notes.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RemindersComponent } from './components/reminders/reminders.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { TrashComponent } from './components/trash/trash.component';

const routes: Routes = [
  {path:'signup', component:RegisterComponent},
  {path:'forgot',component:ForgotComponent},
  {path:'signin',component:LoginComponent},
  {path:'resetPassword',component:ResetPasswordComponent},
  {path:'Dashboard',component:DashboardComponent, canActivate:[AuthenticationGuard],
  children:[
    {path:'Notes',component:GetAllNotesComponent},
    {path:'Archive',component:ArchiveComponent},
    {path:'Trash',component:TrashComponent},
    {path:'Reminders',component:RemindersComponent}
]},
  { path: '', redirectTo: "/signin", pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
