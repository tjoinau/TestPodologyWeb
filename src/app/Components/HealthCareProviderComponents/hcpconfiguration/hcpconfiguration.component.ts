import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Subscription } from 'rxjs';
import { HcpConfigFormModel, HcpConfigurationDto } from 'src/app/api/models';
import { ConfigurationService } from 'src/app/api/services';
import { User } from 'src/app/Models/user';

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



  ngOnInit(): void {
    this.connectedUser = JSON.parse(this.cookieService.get('user'));
    console.log('user : '+this.connectedUser?.id)
    this.subs.push(this.configurationService.apiConfigurationGet$Json({HCPId: this.connectedUser?.id}).subscribe({
      next: (data) => {
        console.log(data)
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
