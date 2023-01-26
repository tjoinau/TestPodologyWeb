import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from 'devextreme/ui/scheduler';
import { Subscription } from 'rxjs';
import { ConsultationService } from 'src/app/api/services';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})

export class CalendarComponent implements OnInit {
  constructor(private router: Router, private consultationService: ConsultationService) { }
  
  private subs: Subscription[] = [];
  appointments: Appointment[] = [];
  currentDate = new Date();


  ngOnInit(): void {
    this.refresh();
  }

  refresh(){
    this.appointments = [];

    this.subs.push(this.consultationService.apiConsultationGet$Json({body: {}}).subscribe({
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
