import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Generator } from 'src/app/models/generator';
import { SystemDataService } from 'src/app/services/system-data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public genNum: number = 0;

  public gen: Generator|undefined;

  constructor(private sysData: SystemDataService) { }

  ngOnInit(): void {
  }

  public load(){
    this.sysData.getGenStatus(this.genNum).subscribe((data:any)=>{
      this.gen = {
        num:this.genNum,
        senzor1: data.senzor1,
        senzor2: data.senzor2,
        stanje: data.stanje
      };
    })
  }

}
