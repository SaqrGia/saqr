import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {


  private fullName$ = new BehaviorSubject<string>("")
  private UserToken$ = new BehaviorSubject<string>("")
   private type$ = new BehaviorSubject<string>("")
   private status$ = new BehaviorSubject<string>("")

constructor() { }

public getRoleFromStore(){
  return this.type$.asObservable()

}
public setRoleFromStore(type:string){
   this.type$.next(type);

}

public getFullNameFromStore(){
  return this.fullName$.asObservable()

}
public setFullNameFromStore(fullName:string){
   this.fullName$.next(fullName);

}

public getUserTokenFromStore(){
  return this.UserToken$.asObservable()

}
public setUserTokenFromStore(userToken:string){
   this.UserToken$.next(userToken);

}

public getStatusFromStore(){
  return this.status$.asObservable()

}
public setStatusFromStore(status:string){
   this.status$.next(status);

}

}
