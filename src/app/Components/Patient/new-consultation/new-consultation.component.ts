import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CookieService } from 'ngx-cookie-service';
import { combineLatest, Subscription } from 'rxjs';
import { AvailableDatesDto, LocationDto, NewConsultationDto } from 'src/app/api/models';
import { ConsultationService, LocationService } from 'src/app/api/services';
import { User } from 'src/app/Models/user';

@Component({
  selector: 'app-new-consultation',
  templateUrl: './new-consultation.component.html',
  styleUrls: ['./new-consultation.component.css']
})
export class NewConsultationComponent implements OnInit {

  constructor(private cookieService: CookieService, private consultationService: ConsultationService, private locationService: LocationService, private snackBar: MatSnackBar) { }

  connectedUser: User | undefined;
  private subs: Subscription[] = [];
  availableDates: AvailableDatesDto[] = [];
  availableLocations: LocationDto[] = [];
  selectedLocation: LocationDto | undefined;
  patientNote: string = '';

  public newConsultationForm: FormGroup = new FormGroup({
    location: new FormControl(null, [Validators.required]),
    date: new FormControl(null, [Validators.required]),
    notes: new FormControl([]),
    patientId: new FormControl(),
    doctorId: new FormControl(1)
  });

  selectedSlot = "";
  ngOnInit(): void {
    this.connectedUser = JSON.parse(this.cookieService.get('user'));

    this.newConsultationForm.patchValue({
      patientId: this.connectedUser?.id
    })
    
    this.subs.push(this.locationService.apiLocationGet$Json({})
    .subscribe({
      next : (locations) => {
        this.availableLocations = locations

        console.log(this.availableLocations)
      },
      error(err) {
        console.warn(err);
      }
    }))


    // this.subs.push(combineLatest([this.consultationService.apiConsultationGetFirstsAvailableDatesGet$Json({LocationId : }), this.locationService.apiLocationGet$Json({})])
    // .subscribe({
    //   next : ([dates, locations]) => {
    //     this.availableDates = dates;
    //     this.availableLocations = locations

    //     console.log(this.availableDates)
    //     console.log(this.availableLocations)
    //   },
    //   error(err) {
    //     console.warn(err);
    //   }
    // }))


    // this.consultationService.apiConsultationGetFirstsAvailableDatesGet$Json().subscribe({
    //   next: (data) => {
    //     this.availableDates = data;
    //     console.log(data);
    //   },
    //   error: (error) => {
    //     console.warn(error);
    //   }
    // })
  }

  postNewConsultation(){
    if(!this.newConsultationForm.valid){
      console.log('form not valid');
      return;
    }

    var newConsultationDto : NewConsultationDto = {
      patientId : this.newConsultationForm.get('patientId')?.value,
      healthCareProviderId : this.newConsultationForm.get('doctorId')?.value,
      locationId : this.newConsultationForm.get('location')?.value.id,
      startConsultation : this.newConsultationForm.get('date')?.value,
      patientInput : this.newConsultationForm.get('notes')?.value
    }

    this.subs.push(this.consultationService.apiConsultationPost$Json({body : newConsultationDto}).subscribe({
      next: (value) => {
        console.log('consultation bien enregistrée')
        console.log(value)

        this.openSnackBar('consultation bien enregistrée')
      },
      error: (err) => {
        console.warn(err)
      }
    }))

    // console.log(newConsultationDto);
  }


  SelectLocation(location: LocationDto | undefined) {
    this.subs.push(this.consultationService.apiConsultationGetFirstsAvailableDatesGet$Json({LocationId : location?.id})
    .subscribe({
      next : (dates) => {
        this.availableDates = dates

        console.log(this.availableDates)
      },
      error(err) {
        console.warn(err);
      }
    }))
  }

  selectSlot(slot: any){
    this.selectedSlot = slot;
    this.newConsultationForm.patchValue({
      date: slot
    });
  }

  openSnackBar(message: string){
    this.snackBar.open(message, 'ok', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

}
