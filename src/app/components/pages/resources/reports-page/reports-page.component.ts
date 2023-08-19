import { Component } from '@angular/core';
import { GiaApiService } from 'src/app/service/api/gia-api.service';
import { environment } from 'src/environments/environment';
import { NgxPaginationModule } from 'ngx-pagination';
import { PdfDownloadCardComponent } from '../../../widgets/pdf-download-card/pdf-download-card.component';
import { NgFor } from '@angular/common';
import { FirstSectionComponent } from '../../../widgets/first-section/first-section.component';

@Component({
    selector: 'app-reports-page',
    templateUrl: './reports-page.component.html',
    styleUrls: ['./reports-page.component.css'],
    standalone: true,
    imports: [FirstSectionComponent, NgFor, PdfDownloadCardComponent, NgxPaginationModule]
})
export class ReportsPageComponent {
  baseUrl: string = environment.apiEndpoint
  sIRUReports: any =[];
  gPReports: any =[];
  tPRReports: any =[];

   //pagination for SIRUReports
   p: number = 1;
   itemsPerPage: number = 5
   totalSIRUReports:any


    //pagination for gPReports
    pgPReports: number = 1;
    itemsPerPageGPReports: number = 4
    totalgPReports:any


    //pagination for tPRReports
    ptPRReports: number = 1;
    itemsPerPagetPRReports: number = 4
    totaltPRReports:any


  constructor(
    private api : GiaApiService ){

    }
    ngOnInit(): void {
      this.getInfoSIRUReports()
      this.getInfoGPReports()
      this.getInfoTPRReports()
      this.getInfo()
    }

    // Get SIRU Reports
    getInfoSIRUReports(){
      this.api.getSIRUReports().subscribe({
        next:(response)=>{
          console.log(response)

          this.sIRUReports =response
          this.sIRUReports.forEach((element: any) => {
            element.download_url=element.field_sirur_pdf;
          });
          console.log(this.sIRUReports)
          this.totalgPReports = response.length
        },
        error:(error: any) => {
          //console.log(error),
        () => console.log('Done getting users')}
      })

    }

      // Get GPReports
    getInfoGPReports(){
      this.api.getGPReports().subscribe({
        next:(response)=>{

          this.gPReports =response
          this.totalgPReports = response.length
        },
        error:(error: any) => {
          //console.log(error),
        () => console.log('Done getting users')}
      })

    }

    // Get TPRReports

   getInfoTPRReports(){
    this.api.getTPRReports().subscribe({
      next:(response)=>{

        this.tPRReports = response
        this.totaltPRReports = response.length

      },
      error:(error: any) => {
        //console.log(error),
      () => console.log('Done getting users')}
    })

  }

//page
    baseUrl2: string = environment.apiEndpoint
    reportPage : any ;

    getInfo(){
      this.api.getReportPage().subscribe({
        next:(response)=>{
          this.reportPage =response[0]
        },
        error:(error: any) => {
          //console.log(error),
        () => console.log('Done getting users')}
      })

    }
}
