import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from 'devextreme/ui/scheduler';
import { CookieService } from 'ngx-cookie-service';
import { Subscription } from 'rxjs';
import { ConsultationService } from 'src/app/api/services';
import { User } from 'src/app/Models/user';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})

export class CalendarComponent implements OnInit {
  constructor(private cookieService: CookieService, private router: Router, private consultationService: ConsultationService) { }
  
  private subs: Subscription[] = [];
  connectedUser: User | undefined;
  appointments: Appointment[] = [];
  currentDate = new Date();


  ngOnInit(): void {
    this.connectedUser = JSON.parse(this.cookieService.get('user'));
    this.refresh();
  }

  refresh(){
    this.appointments = [];

    this.subs.push(this.consultationService.apiConsultationGet$Json({HealthCheckProviderId: this.connectedUser?.id}).subscribe({
      next: (data) => {
        data.forEach(x => {
          this.appointments.push({
            startDate: x.startConsultation,
            endDate: x.endConsultation,
            text: 'Rdv avec patient no '+x.patientId
          })
        })

        console.log(this.appointments)
      }
    }))
  }



}
