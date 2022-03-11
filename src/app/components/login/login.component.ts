import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';
import {NgModel} from "@angular/forms";
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public password: string = "";
  public username: string = "";

  constructor(private userDataService: UserDataService,
              private uiService: UiService) { }

  ngOnInit(): void {
  }

  public login(){
    this.userDataService.login(this.username, this.password).subscribe(()=>{
      console.log(this.username);
      this.uiService.gotoMain();
    });
  }

}
