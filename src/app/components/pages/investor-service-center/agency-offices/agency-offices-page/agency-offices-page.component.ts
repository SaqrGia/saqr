import { Component } from '@angular/core';
import { GiaApiService } from 'src/app/service/api/gia-api.service';
import { environment } from 'src/environments/environment';
import { NgxPaginationModule } from 'ngx-pagination';
import { AgencyOfficeCardComponent } from '../../../../widgets/agency-office-card/agency-office-card.component';
import { NgFor } from '@angular/common';
import { FirstSectionComponent } from '../../../../widgets/first-section/first-section.component';

@Component({
    selector: 'app-agency-offices-page',
    templateUrl: './agency-offices-page.component.html',
    styleUrls: ['./agency-offices-page.component.css'],
    standalone: true,
    imports: [FirstSectionComponent, NgFor, AgencyOfficeCardComponent, NgxPaginationModule]
})
export class AgencyOfficesPageComponent {
  baseUrl: string = environment.apiEndpoint
  agencyOffice: any =[];
  agencyOfficePage: any =[];
  news: any = [] ;


   //pagination
   p: number = 1;
   itemsPerPage: number = 10
   totalAgencyOffice:any
  constructor(
    private api : GiaApiService ){ }
  ngOnInit() {



    this.getPageInfo()
    this.getAgencyOffice()


  }


  getAgencyOffice(){
    this.api.getAgencyOffice().subscribe({
      next:(response)=>{
        this.agencyOffice =response
        this.totalAgencyOffice = response.length
      },
      error:(error: any) => {
        //console.log(error),
      }
    })

  }

  getPageInfo(){
    this.api.getAgencyOfficePage().subscribe({
      next:(response)=>{
        this.agencyOfficePage =response[0]
        console.log(this.agencyOfficePage)
      },
      error:(error: any) => {
        //console.log(error),
}
    })

  }
}
