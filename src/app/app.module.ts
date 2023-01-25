import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// COMPONENTS
import { LoginComponent } from './Components/login/login.component';
import { NewConsultationComponent } from './Components/PatientComponents/new-consultation/new-consultation.component';
import { PatientMainPageComponent } from './Components/PatientComponents/patient-main-page/patient-main-page.component';
import { HealthCareProviderMainPageComponent } from './Components/HealthCareProviderComponents/health-care-provider-main-page/health-care-provider-main-page.component';
import { ConsultationsHoursComponent } from './Components/HealthCareProviderComponents/consultations-hours/consultations-hours.component';

// MATERIALIZES MODULES
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';

// Externals modules
import { CookieService } from 'ngx-cookie-service';
import { ApiModule } from './api/api.module';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'patientMainPage', component: PatientMainPageComponent, children: [
    { path: 'newConsultation', component: NewConsultationComponent },
  ] },
  { path: 'healthCareProviderMainPage', component: HealthCareProviderMainPageComponent, children: [
    { path: 'hours', component: ConsultationsHoursComponent },
  ] }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewConsultationComponent,
    PatientMainPageComponent,
    HealthCareProviderMainPageComponent,
    ConsultationsHoursComponent
  ],
  imports: [
    HttpClientModule,
    ApiModule.forRoot({ rootUrl: 'https://localhost:7252' }),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatStepperModule,
    MatCardModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
