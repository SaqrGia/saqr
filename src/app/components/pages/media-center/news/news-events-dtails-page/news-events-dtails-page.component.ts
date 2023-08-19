import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { GiaApiService } from 'src/app/service/api/gia-api.service';
import { environment } from 'src/environments/environment';
import * as AOS from 'aos';
import { TranslateModule } from '@ngx-translate/core';
import { NewsCardComponent } from '../../../../widgets/news-card/news-card.component';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-news-events-dtails-page',
    templateUrl: './news-events-dtails-page.component.html',
    styleUrls: ['./news-events-dtails-page.component.css'],
    standalone: true,
    imports: [NgFor, NewsCardComponent, RouterLink, TranslateModule]
})
export class NewsEventsDtailsPageComponent {
  id:any
  newsDetails : any
  threeNews : any
  baseUrl: string = environment.apiEndpoint
  constructor( private api : GiaApiService, private router : ActivatedRoute){

      }

      ngOnInit(): void {

        this.getNewsDetails( )
        this.getThreeNews( )
        AOS.init({
          duration: 1200,
          delay:200
      });


      }



      getThreeNews(){

        this.api.getThreeNews().subscribe({
          next:(response)=>{
            this.threeNews = response
          },
          error:(error: any) => {
            //console.log(error),
          () => console.log('Done getting users')}
        })
      }


      getNewsDetails() {
        this.id = this.router.snapshot.paramMap.get('index');
        this.api.getNews().subscribe({
          next:(response)=>{
            if (response && response.length > this.id){
              this.newsDetails =  response[this.id];
            }



          },
          error:(error: any) => {
            //console.log(error),
          () => console.log('Done getting users')}
        })
      }

}
