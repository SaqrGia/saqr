import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {



  private baseUrl :string = 'https://'
  private userPayload : any
  constructor( private http : HttpClient , private router: Router,) {
    // this.userPayload = this.decodeToken()
  }

  singUp(userObj:any){
    return this.http.post<any>(this.baseUrl+'AddUser',userObj);
  }

  update(userObj:any){
    return this.http.post<any>(this.baseUrl+'UpdateUser',userObj);
  }

  deleteUser(userObj:any){
    return this.http.post<any>(this.baseUrl+'DeleteUser',userObj);
  }

  login(loginObj:any){
    return this.http.post<any>(this.baseUrl+'Login',loginObj);

  }

  signOut(){
    localStorage.clear();
    this.router.navigate(['login'])
  }

  storeToken(tokenValue: string){
    localStorage.setItem('Token',tokenValue)
  }

  getToken(){
    return localStorage.getItem('Token')
  }

  isLoggedIn():boolean{
    return !!localStorage.getItem('Token')
  }

  // decodeToken(){
  //   const jwtHelper = new JwtHelperService();
  //   const token = this.getToken()!
  //   console.log(jwtHelper.decodeToken(token))
  //   return jwtHelper.decodeToken(token)
  // }

  getFullNameFromToken(){
    if(this.userPayload)
    return this.userPayload.Full_Name
  }

  getUserTokenFromToken(){
    if(this.userPayload)
    return this.userPayload.Token
  }

  getRoleFromToken(){
    if(this.userPayload)
    return this.userPayload.Credits
  }

  getStatusFromToken(){
    if(this.userPayload)
    return this.userPayload.Type

  }
}
