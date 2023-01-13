import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CalendarComponent } from './Components/calendar/calendar.component';
import { HomeComponent } from './Components/home/home.component';
import { GlobalContext } from './Contexts/global-context';
import { CookieService } from 'ngx-cookie-service';
import { PatientMainPageComponent } from './Components/patient-main-page/patient-main-page.component';
import { DoctorMainPageComponent } from './Components/doctor-main-page/doctor-main-page.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'home', component: HomeComponent },
  { path: 'patientMainPage', component: PatientMainPageComponent },
  { path: 'doctorMainPage', component: DoctorMainPageComponent },
]
@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    HomeComponent,
    PatientMainPageComponent,
    DoctorMainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule
  ],
  providers: [GlobalContext, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
