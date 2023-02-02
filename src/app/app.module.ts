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
import { CalendarComponent } from './Components/HealthCareProviderComponents/calendar/calendar.component';
import { HCPConfigurationComponent } from './Components/HealthCareProviderComponents/hcpconfiguration/hcpconfiguration.component';

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
import {MatTabsModule} from '@angular/material/tabs'; 
import {MatTableModule} from '@angular/material/table'; 
import {MatSlideToggleModule} from '@angular/material/slide-toggle'; 

// DEVEXTREME MODULES
import { DxSchedulerModule, DxRangeSelectorModule, DxDataGridModule } from 'devextreme-angular';

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
    { path: 'calendar', component: CalendarComponent },
    { path: 'hours', component: ConsultationsHoursComponent },
    { path: 'hcpConfiguration', component: HCPConfigurationComponent },
  ] }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewConsultationComponent,
    PatientMainPageComponent,
    HealthCareProviderMainPageComponent,
    ConsultationsHoursComponent,
    CalendarComponent,
    HCPConfigurationComponent
  ],
  imports: [
    HttpClientModule,
    ApiModule.forRoot({ rootUrl: 'https://localhost:7252' }),
    //ApiModule.forRoot({ rootUrl: 'https://testpodologyapi.azurewebsites.net' }),
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
    MatTabsModule,
    MatTableModule,
    MatSlideToggleModule,
    DxSchedulerModule,
    DxRangeSelectorModule,
    DxDataGridModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
