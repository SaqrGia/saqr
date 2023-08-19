import { AuthService } from './../../../../service/auth/auth.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { UserStoreService } from 'src/app/service/user-store/user-store.service';
import ValidateForm from 'src/app/helpers/validaterform';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, NgIf, RouterLink]
})
export class LoginComponent {
  type: string ="password";
  isText: boolean = false;
  eyeIcon : string = "bx-hide"

  loginForm! : FormGroup;
  constructor(
    private fb: FormBuilder ,
    private auth : AuthService ,
    private router: Router,
    private toast: NgToastService,

    private userStor : UserStoreService,


    ){

  }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      EMail: ['',Validators.required],
      Password: ['',Validators.required]
    })

  }

  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "bx-show" : this.eyeIcon = "bx-hide";
    this.isText ? this.type = "text" : this.type = "password";
    console.log(this.type);

  }


  reloadPage() {
    setTimeout(()=>{
      window.location.reload();
    }, 1000);
}

  onLogin(){
    if(this.loginForm.valid){

      //send the obj to login
      this.auth.login(this.loginForm.value)
      .subscribe({
        next:(res)=>{
          // alert(res.Message)
          this.auth.storeToken(res.Token)
          // const  tokenPayload = this.auth.decodeToken()
          // this.userStor.setUserTokenFromStore(tokenPayload.Token)
          // this.userStor.setFullNameFromStore(tokenPayload.Full_Name)
          // this.userStor.setRoleFromStore(tokenPayload.Status)
          this.toast.success({detail:"SUCCESS",summary:"Login Successful",duration:5000});
          this.loginForm.reset()

          // this.reloadCurrentRoute()


           this.router.navigate(['dashboard'])

        },
        error:(err)=>{
          this.toast.error({detail:"ERROR",summary:"somethings wrong ",duration:5000});
          this.loginForm.reset()
        }
      })

    }else{
      ValidateForm.validateAllFormFileds(this.loginForm)

    }
  }

}
