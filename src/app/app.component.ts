import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { User } from './Models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TestPodologyWeb';
  connectedUser: User | undefined;

  constructor(public cookieService: CookieService){}

  ngOnInit(): void {
    console.log('init')
    var userJson = this.cookieService.get('user');
    if(userJson)
    this.connectedUser = JSON.parse(userJson);
  }
}
