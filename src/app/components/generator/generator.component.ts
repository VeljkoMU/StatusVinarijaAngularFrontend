import { Component, Input, OnInit } from '@angular/core';
import { Generator } from 'src/app/models/generator';
import { SystemDataService } from 'src/app/services/system-data.service';
import { UiService } from 'src/app/services/ui.service';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent implements OnInit {

  @Input() public gen: Generator = {
    num:0,
    senzor1: false,
    senzor2: false,
    stanje: "STANJE UREDJAJA SE UCITAVA"
  };

  public time: Date = new Date();

  public done: boolean = false;
  public user: string = ""
  public delay: number = 0;

  constructor(private sysData: SystemDataService,
              private usetData: UserDataService,
              private ui: UiService) { }

  ngOnInit(): void {
    console.log(this.gen);
    this.user = this.usetData.Username
  }

  public runOperatoion(){
    if(this.gen.num==0)
      return;

    this.sysData.postOperation(this.gen.num, this.time.toString(), this.delay).subscribe((res)=>{
      console.log(res.status);
      if(!res.ok)
        alert("Zakazivanje operacije nije uspelo!");
      else if(res.status==404)
        this.ui.gotoLogin();
        else if(res.status==403)
        alert("Zakazivanje operacije nije uspelo!");
      else
        this.done = true;
    });
  }

}
