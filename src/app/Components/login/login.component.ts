import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { GlobalContext } from 'src/app/Contexts/global-context';
import { EUserType } from 'src/app/Models/e-user-type';
import { User } from 'src/app/Models/user';
import { UserGroup } from 'src/app/Models/user-group';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  selectedUser: User | undefined;

  constructor(private router: Router, private globalContext : GlobalContext, private cookieService: CookieService){}

  ngOnInit(): void {
    this.cookieService.delete('user')
    var userJson = this.cookieService.get('user')
    if(userJson)
      this.selectedUser = JSON.parse(this.cookieService.get('user'))
  }

  userGroups: UserGroup[] = [
    {
      groupName: EUserType.doctor.toString(),
      users: [
      {id: 1, name: "Thomas Joinau", type: EUserType.doctor.toString()},
      {id: 2, name: "Yassin Hajaj", type: EUserType.doctor.toString()},
      {id: 3, name: "Alex Doo", type: EUserType.doctor.toString()}
      ]
    },
    {
      groupName: EUserType.patient.toString(),
      users: [
      {id: 1, name: "Silvia Tedesco", type: EUserType.patient.toString()},
      {id: 2, name: "Adeline Parlier", type: EUserType.patient.toString()},
      {id: 5, name: "Lisa Binot", type: EUserType.patient.toString()},
      {id: 6, name: "David VanWal", type: EUserType.patient.toString()}
      ]
    },
  ]

  userSelected(user : User){
    console.log(this.cookieService.get('user'));

    this.cookieService.set('user', JSON.stringify(user))

    // this.globalContext.connectedUser = e
    console.log(this.cookieService.get('user'));
    if(user.type == EUserType.doctor){
      this.router.navigate(['doctorMainPage']);
    }
    else{
      this.router.navigate(['patientMainPage']);
    }
  }

}
