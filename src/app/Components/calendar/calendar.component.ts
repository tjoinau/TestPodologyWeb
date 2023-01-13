import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { GlobalContext } from 'src/app/Contexts/global-context';
import { User } from 'src/app/Models/user';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor(private cookieService: CookieService) { }
  connectedUser: User | undefined;

  ngOnInit(): void {
    console.log("init page")
    this.connectedUser = JSON.parse(this.cookieService.get('user'));
    // console.log(this.globalContext.connectedUser)
  }

}
