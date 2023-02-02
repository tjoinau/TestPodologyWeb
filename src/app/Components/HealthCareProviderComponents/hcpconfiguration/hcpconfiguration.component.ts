import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Subscription, timer } from 'rxjs';
import { HcpConfigFormModel, HcpConfigurationDto, HoursDto } from 'src/app/api/models';
import { ConfigurationService } from 'src/app/api/services';
import { User } from 'src/app/Models/user';

export interface CustomLocation {
  id?: number;
  hours?: CustomHour[];
}

export interface CustomHour {
  dayOfWeek?: string;
  endTime?: string;
  isOpen?: boolean;
  startTime?: string;
}

@Component({
  selector: 'app-hcpconfiguration',
  templateUrl: './hcpconfiguration.component.html',
  styleUrls: ['./hcpconfiguration.component.scss']
})
export class HCPConfigurationComponent implements OnInit {
  constructor(private cookieService: CookieService, private configurationService: ConfigurationService) { }

  private subs: Subscription[] = [];
  configDto: HcpConfigurationDto | undefined;
  connectedUser: User | undefined;

  public configForm: FormGroup = new FormGroup({
    consultationLength: new FormControl(null, [Validators.required]),
    endDay: new FormControl(null, [Validators.required]),
    startDay: new FormControl(null, [Validators.required])
  });

  startValue: Date | undefined;
  endValue: Date | undefined;
  hours: HoursDto[] = []
  customLocation: CustomLocation[] = [];
  



  ngOnInit(): void {
    this.startValue = new Date(2000,1,1,3,0);
    // this.startValue.setHours(3)
    // this.startValue.setMinutes(0)
    
    this.endValue = new Date(2000,1,1,23,0);
    // this.endValue.setHours(23)
    // this.endValue.setMinutes(0)

    console.log('start : '+this.startValue)
    console.log('end : '+this.endValue)


    this.connectedUser = JSON.parse(this.cookieService.get('user'));
    console.log('user : '+this.connectedUser?.id)
    this.subs.push(this.configurationService.apiConfigurationGet$Json({HCPId: this.connectedUser?.id}).subscribe({
      next: (data) => {
        var customHour: CustomHour[] = [];

        data.config?.locationsHours?.forEach(x => {
          customHour = [];
          x.hours?.forEach(y => {
            customHour.push({
              dayOfWeek : y.dayOfWeek as string,
              isOpen: y.isOpen,
              startTime: y.startTime as string,
              endTime: y.endTime as string
              // endTime: new Date(2000,1,1, parseInt((y.endTime as string).slice(0, 2)), parseInt((y.endTime as string).slice(-2))) ,
              // startTime: new Date(2000,1,1, parseInt((y.startTime as string).slice(0, 2)), parseInt((y.startTime as string).slice(-2)))
            })
          })
          this.customLocation.push({
            id: x.id,
            hours: customHour
          })
        });
        console.log(this.customLocation)
        // this.hours = data.config?.hours as HoursDto[];
        this.configDto = data;
        if(data.id as number > 0 ){
          this.configForm.setValue({
            consultationLength: data.config?.consultationLength,
            startDay: data.config?.startDay,
            endDay: data.config?.endDay
          })
        }
        else{
          // DEFAULT VALUES IF NOT YES SETTED
          this.configForm.setValue({
            consultationLength: 60,
            startDay: '08:00',
            endDay: '16:00'
          })
        }
        
      },
      error: (error) => {
        console.log(error)
      }
    }))
  }

  customizeText(value : any) {
    return `${value.valueText}`;
  }

  SaveConfig(){
    console.log('start')
    var formModel: HcpConfigFormModel = {
      startDay: this.configForm.get('startDay')?.value,
      endDay: this.configForm.get('endDay')?.value,
      consultationLength: this.configForm.get('consultationLength')?.value
    }

    this.subs.push(this.configurationService.apiConfigurationPost({body:{hcpId: this.connectedUser?.id, config: formModel, id: this.configDto?.id} })
    .subscribe({
      next: (data) =>{

      }
    }))
  }
}
