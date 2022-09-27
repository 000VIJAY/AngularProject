import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ForgotComponent } from './components/forgot/forgot.component';
import {MatButtonModule} from '@angular/material/button';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GetAllNotesComponent } from './components/get-all-notes/get-all-notes.component';
import { CreateNoteComponent } from './components/create-note/create-note.component';
import { DisplayNoteComponent } from './components/display-note/display-note.component';
import { IconComponent } from './components/icon/icon.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { TrashComponent } from './components/trash/trash.component';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ForgotComponent,
    ResetPasswordComponent,
    DashboardComponent,
    GetAllNotesComponent,
    CreateNoteComponent,
    DisplayNoteComponent,
    IconComponent,
    ArchiveComponent,
    TrashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,HttpClientModule,MatListModule,MatIconModule,MatSidenavModule,MatToolbarModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
