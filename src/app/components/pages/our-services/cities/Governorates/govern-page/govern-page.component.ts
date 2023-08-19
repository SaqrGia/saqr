import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { GiaApiService } from 'src/app/service/api/gia-api.service';
import { environment } from 'src/environments/environment';
import { GovernoratesCardComponent } from '../../../../../widgets/governorates-card/governorates-card.component';
import { FirstSectionComponent } from '../../../../../widgets/first-section/first-section.component';

@Component({
    selector: 'app-govern-page',
    templateUrl: './govern-page.component.html',
    styleUrls: ['./govern-page.component.css'],
    standalone: true,
    imports: [FirstSectionComponent, GovernoratesCardComponent]
})
export class GovernPageComponent {
  governorates: any[] = [];
  governoratesSummary: any
  governoratePage: any


  baseUrl: string = environment.apiEndpoint

  constructor( private api : GiaApiService , private router: Router, private sanitizer: DomSanitizer){
  }
  ngOnInit(): void {
    this.getGovernoratePage()
    this.getInfo()
    // this.baseUrl =this.sanitizer.bypassSecurityTrustResourceUrl(environment.apiEndpoint);

  }

  getGovernoratePage(){
    this.api.getGovernoratePage().subscribe({
      next:(response)=>{
        this.governoratePage = response[0]
      },
      error:(error: any) => {
        //console.log(error),
      () => console.log('Done getting users')}
    })

  }

  getInfo(){
    this.api.getGovernorate().subscribe({
      next:(response)=>{
        this.governorates =  response;

        for (let governorate of this.governorates) {

          governorate.summary_details = this.sanitizer.bypassSecurityTrustHtml(governorate.field_govern_summary_details)
        }


      },
      error:(error: any) => {
        //console.log(error),
      () => console.log('Done getting users')}
    })

  }


}
