import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import ValidateForm from 'src/app/helpers/validaterform';
import { GiaApiService } from 'src/app/service/api/gia-api.service';
import { environment } from 'src/environments/environment';
import { TranslateModule } from '@ngx-translate/core';
import { NgIf } from '@angular/common';
import { FirstSectionComponent } from '../../../widgets/first-section/first-section.component';


@Component({
    selector: 'app-contact-us-page',
    templateUrl: './contact-us-page.component.html',
    styleUrls: ['./contact-us-page.component.css'],
    standalone: true,
    imports: [FirstSectionComponent, FormsModule, ReactiveFormsModule, NgIf, TranslateModule]
})
export class ContactUsPageComponent {
  baseUrl: string = environment.apiEndpoint
  contactUsPage : any
  contactUsCard : any

  contactUsForm!: FormGroup;

  constructor(
    private api : GiaApiService,
    private fb: FormBuilder ,
     private toast: NgToastService,
     private router: Router ){ }

  ngOnInit(): void {

    this.contactUsForm = this.fb.group({
      webform_id: ['contact_us'],
      your_name: ['',Validators.required],
      your_email: ['',Validators.required],
      subject: ['',Validators.required],
      message: ['',Validators.required]
    })


    this.getContactUsPage()
    this.getContactUsCard()
  }

  getContactUsPage(){
    this.api.getContactUsPage().subscribe({
      next:(response)=>{
        this.contactUsPage = response[0]
      },
      error:(error: any) => {
        //console.log(error),
    }
    })

  }
  getContactUsCard(){
    this.api.getContactUsCard().subscribe({
      next:(response)=>{
        this.contactUsCard = response[0]
      },
      error:(error: any) => {
        //console.log(error),
      () => console.log('Done getting users')}
    })

  }


  onSendForm(){
    if(this.contactUsForm.valid){
      console.log(this.contactUsForm.value)

      //preform logic for singUp
      this.api.contactMessage(this.contactUsForm.value)
      .subscribe({
        next:(res)=>{
             alert("Send Successfully")
           this.toast.success({detail:"SUCCESS",summary:"Added Successfully",duration:5000});
          this.contactUsForm.reset()
    
        },
        error:(err)=>{
          alert(err?.error.massage)
          this.toast.error({detail:"ERROR",summary:"something wrong",duration:5000});
        }
      })
    }else{
      // console.log("form is not valid")
      ValidateForm.validateAllFormFileds(this.contactUsForm)

    }
  }
}



// var d = {
//   'contact_form':[{'target_id':'feedback'}],
//   'name':[{ 'value': document.getElementById('edit-name').value }],
//   'mail':[{ 'value': document.getElementById('edit-mail').value }],
//   'subject':[{ 'value': document.getElementById('edit-subject-0-value').value }],
//   'message':[{ 'value': document.getElementById('edit-message-0-value').value }]
// };
