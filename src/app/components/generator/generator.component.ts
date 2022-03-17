import { Component, Input, OnInit } from '@angular/core';
import { Generator } from 'src/app/models/generator';
import { SystemDataService } from 'src/app/services/system-data.service';
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

  constructor(private sysData: SystemDataService,
              private usetData: UserDataService) { }

  ngOnInit(): void {
    console.log(this.gen);
    this.user = this.usetData.Username
  }

  public runOperatoion(){
    if(this.gen.num==0)
      return;

    this.sysData.postOperation(this.gen.num, this.time.toString()).subscribe((res)=>{
      if(!res.ok)
        alert("Zakazivanje operacije nije uspelo!")
      else
        this.done = true;
    });
  }

}
