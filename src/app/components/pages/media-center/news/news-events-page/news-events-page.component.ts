import { Component } from '@angular/core';
import { GiaApiService } from 'src/app/service/api/gia-api.service';
import { environment } from 'src/environments/environment';
import * as AOS from 'aos';
import { NgxPaginationModule } from 'ngx-pagination';
import { NewsCardComponent } from '../../../../widgets/news-card/news-card.component';
import { NgFor } from '@angular/common';
import { FirstSectionComponent } from '../../../../widgets/first-section/first-section.component';

@Component({
    selector: 'app-news-events-page',
    templateUrl: './news-events-page.component.html',
    styleUrls: ['./news-events-page.component.css'],
    standalone: true,
    imports: [FirstSectionComponent, NgFor, NewsCardComponent, NgxPaginationModule]
})
export class NewsEventsPageComponent {
  baseUrl: string = environment.apiEndpoint
  newsDetails: any =[];
  newsPage: any =[];
  news: any = [] ;


   //pagination
   p: number = 1;
   itemsPerPage: number = 9
   totalOpportunities:any
  constructor(
    private api : GiaApiService ){

    }
  ngOnInit(): void {


    this.getNewsPage()
    this.getInfo()
    AOS.init({
      duration: 1200,
      delay:200
  });

  }



  getInfo(){
    this.api.getNews().subscribe({
      next:(response)=>{
        this.newsDetails =response
        this.totalOpportunities = response.length
      },
      error:(error: any) => {
        //console.log(error),
      () => console.log('Done getting users')}
    })

  }


  getNewsPage(){
    this.api.getNewsPage().subscribe({
      next:(response)=>{
        this.newsPage =response[0]
      },
      error:(error: any) => {
        //console.log(error),
      () => console.log('Done getting users')}
    })

  }
}
