import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

import { CalendarComponent } from './Components/calendar/calendar.component';
import { GlobalContext } from './Contexts/global-context';
import { CookieService } from 'ngx-cookie-service';
import { PatientMainPageComponent } from './Components/Patient/patient-main-page/patient-main-page.component';
import { DoctorMainPageComponent } from './Components/Doctor/doctor-main-page/doctor-main-page.component';
import { LoginComponent } from './Components/login/login.component'
import { NgApexchartsModule } from 'ng-apexcharts';
import { ConsultationComponent } from './Components/consultation/consultation.component';
import { NewConsultationComponent } from './Components/Patient/new-consultation/new-consultation.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'patientMainPage', component: PatientMainPageComponent, children: [
    { path: 'calendar', component: CalendarComponent },
    { path: 'newConsultation', component: NewConsultationComponent }
  ] },
  { path: 'doctorMainPage', component: DoctorMainPageComponent, children: [
    { path: 'calendar', component: CalendarComponent }
  ] }
]
@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    PatientMainPageComponent,
    DoctorMainPageComponent,
    LoginComponent,
    ConsultationComponent,
    NewConsultationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    NgApexchartsModule
  ],
  providers: [GlobalContext, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
