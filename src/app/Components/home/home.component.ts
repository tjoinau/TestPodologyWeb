import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { GlobalContext } from 'src/app/Contexts/global-context';
import { User } from 'src/app/Models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  connectedUser: User | undefined;

  constructor(private router: Router, private globalContext : GlobalContext, private cookieService: CookieService){}

  ngOnInit(): void {
    this.connectedUser = JSON.parse(this.cookieService.get('user'));
  }

  Disconnect(){
    this.router.navigate(['../login']);
  }

}
