import { Component, OnInit } from '@angular/core';
import { AvailableDatesDto } from 'src/app/api/models';
import { ConsultationService } from 'src/app/api/services';

@Component({
  selector: 'app-new-consultation',
  templateUrl: './new-consultation.component.html',
  styleUrls: ['./new-consultation.component.css']
})
export class NewConsultationComponent implements OnInit {

  constructor(private consultationService: ConsultationService) { }

  availableDates : AvailableDatesDto[] = [];

  ngOnInit(): void {
    var availableConsultations = this.consultationService.apiConsultationGetFirstsAvailableDatesGet$Json().subscribe({
      next: (data) => {
        this.availableDates = data;
        console.log(data);
      },
      error: (error) => {
        console.warn(error);
      }
    })
  }

}
