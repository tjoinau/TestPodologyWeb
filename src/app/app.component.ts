import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { User } from './Models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TestPodologyWeb';
  connectedUser: User | undefined;

  constructor(private router: Router, public cookieService: CookieService){}

  ngOnInit(): void {
    console.log('init')
    var userJson = this.cookieService.get('user');
    if(userJson)
    this.connectedUser = JSON.parse(userJson);
  }
}
