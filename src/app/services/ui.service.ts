import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  constructor(private router: Router) { }

  public gotoMain(){
    this.router.navigate(['main']);
  }

  public gotoLogin(){
    this.router.navigate(['login']);
  }

  public gotoRegistration(){
    this.router.navigate(['registration']);
  }
}
