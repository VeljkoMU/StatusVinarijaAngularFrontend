import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { share } from 'rxjs';
import { UserDataService } from './user-data.service';

@Injectable({
  providedIn: 'root'
})
export class SystemDataService {

  constructor(private httpClient: HttpClient,
              private userData: UserDataService) { }

  public getGenStatus(num: number){
    this.userData.resetTimeout();
    return this.httpClient.get(`http://localhost:5000/generator/${num}/ggg`).pipe(share());
  }

  public postOperation(num: number, time:string){
    this.userData.resetTimeout();
    return this.httpClient.post(`http://localhost:5000/generator/${num}/${this.userData.Token}`, {
      time: time
    }, {observe: "response"}).pipe(share());
  }
}
