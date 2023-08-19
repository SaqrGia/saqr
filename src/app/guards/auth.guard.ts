import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {
  constructor(
    private auth : AuthService ,
     private router: Router,
     private toast: NgToastService
     ){

  }

  canActivate():boolean {
    if(this.auth.isLoggedIn()){
      return true
    }else{
      this.toast.error({detail:"ERROR",summary:"Please Login First!",duration:5000});
      this.router.navigate(['login'])
      return false
    }
  }


}
