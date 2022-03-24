import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Generator } from 'src/app/models/generator';
import { SystemDataService } from 'src/app/services/system-data.service';
import { UiService } from 'src/app/services/ui.service';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public genNum: number = 0;

  public gen: Generator|undefined;

  public role:string ="";

  public genEnum:any = [1,2,3,4,5,6,7,8,9,10,11,12];

  constructor(private sysData: SystemDataService,
              private userData: UserDataService,
              private ui: UiService) { }

  ngOnInit(): void {
    this.role = this.userData.Username;
  }

  public load(genNum: number){
    this.sysData.getGenStatus(genNum).subscribe((data:any)=>{
      this.gen = {
        num:genNum,
        senzor1: data.senzor1,
        senzor2: data.senzor2,
        stanje: data.stanje
      };
    })
  }

  public gotoRegistration(){
    this.ui.gotoRegistration();
  }

}
