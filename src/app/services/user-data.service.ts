import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { share } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private token:string = ""

  constructor(private httpClient: HttpClient) { }

  public login(username: string, password: string){
    let obs =  this.httpClient.post("http://localhost:5000/login", {
      password: password,
      username: username
    }).pipe(share());

    obs.subscribe((data: any)=>{
      this.token = data.token;
      alert(this.token);
    });

    return obs;
  }

  public get Token(){
    return this.token;
  }
}
