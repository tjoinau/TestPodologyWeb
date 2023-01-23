import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { combineLatest, Subscription } from 'rxjs';
import { HealthCareProviderDto, PatientDto } from 'src/app/api/models';
import { HealthCareProviderService, PatientService } from 'src/app/api/services';
import { GlobalContext } from 'src/app/Contexts/global-context';
import { EUserType } from 'src/app/Models/e-user-type';
import { User } from 'src/app/Models/user';
import { UserGroup } from 'src/app/Models/user-group';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  selectedUser: User | undefined;

  constructor(private router: Router, 
    private globalContext : GlobalContext, 
    private cookieService: CookieService, 
    private healthCareProviderService: HealthCareProviderService,
    private patientService: PatientService){}
    private subs: Subscription[] = [];
    healthCareProvidersDto: HealthCareProviderDto[] = [];
    patientsDto: PatientDto[] = [];

  ngOnInit(): void {
    this.cookieService.delete('user')
    var userJson = this.cookieService.get('user')
    if(userJson)
      this.selectedUser = JSON.parse(this.cookieService.get('user'))





     this.subs.push(combineLatest([this.healthCareProviderService.apiHealthCareProviderGet$Json({ }), this.patientService.apiPatientGet$Json({})])
    .subscribe({
      next : ([healthCareProviders, patients]) => {
        this.healthCareProvidersDto = healthCareProviders;
        this.patientsDto = patients
      },
      error(err) {
        console.warn(err);
      }
    }))
  }

  healthCareProviderSelected(healthCareProviderDto : HealthCareProviderDto){
    var user : User = {
      id : healthCareProviderDto.id as number,
      name: healthCareProviderDto.firstName+' '+healthCareProviderDto.lastName,
      type: EUserType.doctor
    }
    console.log(this.cookieService.get('user'));

    this.cookieService.set('user', JSON.stringify(user))

    this.router.navigate(['doctorMainPage']);
  }

  patientSelected(patientDto : PatientDto){
    var user : User = {
      id : patientDto.id as number,
      name: patientDto.firstName+' '+patientDto.lastName,
      type: EUserType.patient
    }
    console.log(this.cookieService.get('user'));

    this.cookieService.set('user', JSON.stringify(user))

    this.router.navigate(['patientMainPage']);
  }

}
