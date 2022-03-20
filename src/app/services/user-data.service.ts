import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { share } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private token:string = ""
  private username:string = ""
  public sessionTimeout: any;

  constructor(private httpClient: HttpClient) { }

  public login(username: string, password: string){
    let obs =  this.httpClient.post("http://localhost:5000/login/none", {
      password: password,
      username: username
    }).pipe(share());

    obs.subscribe((data: any)=>{
      this.token = data.token;
      this.username = username;
      this.sessionTimeout=setTimeout(()=>this.token="", 1000*60*5);
    });

    return obs;
  }

  public resetTimeout(){
    clearTimeout(this.sessionTimeout);
    this.sessionTimeout=setTimeout(()=>this.token="", 1000*60*5);
  }

  public register(username: string, password:string, name:string){
    return this.httpClient.put(`http://localhost:5000/login/${this.token}`, {
      username: username,
      password: password,
      name: name
    }, {observe: "response"});
  }

  public get Token(){
    return this.token;
  }

  public get Username(){
    return this.username
  }
}
