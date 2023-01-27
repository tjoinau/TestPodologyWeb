import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from 'devextreme/ui/scheduler';
import { CookieService } from 'ngx-cookie-service';
import { Subscription } from 'rxjs';
import { LocationDto } from 'src/app/api/models';
import { ConsultationService, LocationService } from 'src/app/api/services';
import { User } from 'src/app/Models/user';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})

export class CalendarComponent implements OnInit {
  constructor(private cookieService: CookieService, 
    private router: Router, 
    private consultationService: ConsultationService,
    private locationService: LocationService) { }

    Datas :{
      locationId: number;
      startDate: Date;
      endDate: Date;
      text: string
    }[] = []
  private subs: Subscription[] = [];
  connectedUser: User | undefined;
  appointments: Appointment[] = [];
  currentDate = new Date();
  locations: LocationDto[] = [];


  ngOnInit(): void {
    this.connectedUser = JSON.parse(this.cookieService.get('user'));

    this.subs.push(this.locationService.apiLocationGet$Json({DoctorId: this.connectedUser?.id}).subscribe({
      next: (data) => {
        this.locations = data;

        console.log(this.locations)
      }
    }))
    this.refresh();
  }

  refresh(){
    this.appointments = [];
    this.Datas = [];

    this.subs.push(this.consultationService.apiConsultationGet$Json({HealthCheckProviderId: this.connectedUser?.id}).subscribe({
      next: (data) => {
        data.forEach(x => {this.Datas.push({
          text: 'Rdv avec '+ x.patient?.firstName + ' ' + x.patient?.lastName,
          locationId: x.locationId as number,
          startDate: new Date(x.startConsultation as string),
          endDate: new Date( x.endConsultation as string)
        })

        console.log(this.Datas)
          // this.appointments.push({
          //   startDate: x.startConsultation,
          //   endDate: x.endConsultation,
          //   text: 'Rdv avec patient no '+x.patientId,
            
          // })
        })

        console.log(this.appointments)
      }
    }))
  }



}
