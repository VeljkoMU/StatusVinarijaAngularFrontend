import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public succsess:boolean = false;
  public name:string = "";
  public password:string ="";

  constructor(private userData: UserDataService,
              private ui: UiService) { }

  ngOnInit(): void {
  }

  public register(){
    this.userData.register("upravljac", this.password, this.name).subscribe((res)=>{
      if(res.ok)
        this.succsess = true;
      else alert("Greska u registraciji.");
    });
  }

  public goBack(){
    this.ui.gotoMain();
  }

}
