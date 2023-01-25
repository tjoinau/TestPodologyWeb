import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { User } from 'src/app/Models/user';

@Component({
  selector: 'app-health-care-provider-main-page',
  templateUrl: './health-care-provider-main-page.component.html',
  styleUrls: ['./health-care-provider-main-page.component.scss']
})
export class HealthCareProviderMainPageComponent {
  constructor(private cookieService: CookieService, private router: Router) { }
  connectedUser: User | undefined;

  ngOnInit(): void {
    this.connectedUser = JSON.parse(this.cookieService.get('user'));
  }

  Disconnect(){
    this.router.navigate(['../login']);
  }
}
