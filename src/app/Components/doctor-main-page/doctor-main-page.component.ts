import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { User } from 'src/app/Models/user';

@Component({
  selector: 'app-doctor-main-page',
  templateUrl: './doctor-main-page.component.html',
  styleUrls: ['./doctor-main-page.component.css']
})
export class DoctorMainPageComponent implements OnInit {

  constructor(private cookieService: CookieService) { }
  connectedUser: User | undefined;

  ngOnInit(): void {
    this.connectedUser = JSON.parse(this.cookieService.get('user'));
  }

}
