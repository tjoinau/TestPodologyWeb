import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { User } from 'src/app/Models/user';

@Component({
  selector: 'app-patient-main-page',
  templateUrl: './patient-main-page.component.html',
  styleUrls: ['./patient-main-page.component.css']
})
export class PatientMainPageComponent implements OnInit {
  connectedUser: User | undefined;
  constructor(private cookieService: CookieService) { }

  ngOnInit(): void {
    this.connectedUser = JSON.parse(this.cookieService.get('user'));
  }
}
