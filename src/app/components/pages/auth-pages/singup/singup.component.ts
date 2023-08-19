import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import ValidateForm from 'src/app/helpers/validaterform';
import { countries } from 'src/app/models/country-data-store';
import { AuthService } from 'src/app/service/auth/auth.service';
import { NgIf, NgFor } from '@angular/common';

@Component({
    selector: 'app-singup',
    templateUrl: './singup.component.html',
    styleUrls: ['./singup.component.css'],
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, NgIf, NgFor, RouterLink]
})
export class SingupComponent {
  public countries:any = countries

  typeP: string ="password";
  isText: boolean = false;
  eyeIcon : string = "bx-hide"

  typeCPass: string ="password";
  isText2: boolean = false;
  eyeIcon2 : string = "bx-hide"

  signupForm!: FormGroup;
  constructor(
    private fb: FormBuilder ,
     private auth : AuthService  ,
     private toast: NgToastService,
     private router: Router){

  }


  ngOnInit(): void {
    this.signupForm = this.fb.group({

      First_Name: ['',Validators.required],
      Last_Name: ['',Validators.required],
      E_Mail: ['',Validators.required],
      Password: ['',Validators.required],
      // cPassword: ['',Validators.required],
      Country: ['',Validators.required],
      Telephone: ['',Validators.required],
      AdminToken: ['Website'],
      other: [''],
      Types: ['User'],
      Note: [''],
      UserToken: [''],

    })

  }

  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "bx-show" :this.eyeIcon = "bx-hide";
    this.isText ? this.typeP = "text" : this.typeP = "password";


  }
  hideShowCPass(){
    this.isText2 = !this.isText2;
    this.isText2 ? this.eyeIcon2 = "bx-show" :this.eyeIcon2 = "bx-hide";
    this.isText2 ? this.typeCPass = "text" : this.typeCPass = "password";


  }

  onSignUp(){
    if(this.signupForm.valid){

      //preform logic for singUp
      this.auth.singUp(this.signupForm.value)
      .subscribe({
        next:(res)=>{
            // alert(res.message)
           this.toast.success({detail:"SUCCESS",summary:"Added Successfully",duration:5000});
          this.signupForm.reset()
          this.router.navigate(['login'])
        },
        error:(err)=>{
          // alert(err?.error.massage)
          this.toast.error({detail:"ERROR",summary:"something wrong",duration:5000});
        }
      })
    }else{
      ValidateForm.validateAllFormFileds(this.signupForm)

    }
  }
}
