import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { User } from 'src/app/Models/user';

@Component({
  selector: 'app-patient-main-page',
  templateUrl: './patient-main-page.component.html',
  styleUrls: ['./patient-main-page.component.scss']
})
export class PatientMainPageComponent implements OnInit {
  connectedUser: User | undefined;
  constructor(private cookieService: CookieService, private router: Router) { }

  ngOnInit(): void {
    this.connectedUser = JSON.parse(this.cookieService.get('user'));
  }

  Disconnect(){
    this.router.navigate(['../login']);
  }
}
