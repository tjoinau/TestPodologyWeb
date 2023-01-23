import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
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
  @ViewChild(MatAccordion) accordion: MatAccordion | undefined;

  constructor(private router: Router, private cookieService: CookieService, private consultationService: ConsultationService, private locationService: LocationService, private snackBar: MatSnackBar) { }

  connectedUser: User | undefined;
  private subs: Subscription[] = [];
  availableDates: AvailableDatesDto[] = [];
  availableLocations: LocationDto[] = [];
  selectedLocation: LocationDto | undefined;
  patientNote: string = '';

  public step1Form: FormGroup = new FormGroup({
    location: new FormControl(null, [Validators.required]),
    patientId: new FormControl(),
    doctorId: new FormControl(1)
  });

  public step2Form: FormGroup = new FormGroup({
    date: new FormControl(null, [Validators.required]),
  });

  public step3Form: FormGroup = new FormGroup({
    notes: new FormControl([]),
  });

  selectedSlot = "";
  ngOnInit(): void {
    this.connectedUser = JSON.parse(this.cookieService.get('user'));

    this.step1Form.patchValue({
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
  }

  postNewConsultation(){
    // if(!this.newConsultationForm.valid){
    //   console.log('form not valid');
    //   return;
    // }

    var newConsultationDto : NewConsultationDto = {
      patientId : this.step1Form.get('patientId')?.value,
      healthCareProviderId : this.step1Form.get('doctorId')?.value,
      locationId : this.step1Form.get('location')?.value.id,
      startConsultation : this.step2Form.get('date')?.value,
      patientInput : this.step3Form.get('notes')?.value
    }

    this.subs.push(this.consultationService.apiConsultationPost$Json({body : newConsultationDto}).subscribe({
      next: (value) => {
        console.log('consultation bien enregistrée')
        console.log(value)

        this.openSnackBar('consultation bien enregistrée')

        this.router.navigate(['patientMainPage']);
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
    this.step2Form.patchValue({
      date: slot
    });

    this.accordion?.closeAll()
  }

  openSnackBar(message: string){
    this.snackBar.open(message, 'ok', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

}
