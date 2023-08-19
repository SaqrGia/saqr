import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GiaApiService } from 'src/app/service/api/gia-api.service';
import { TranslateModule } from '@ngx-translate/core';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-opportunities-detials-page',
    templateUrl: './opportunities-detials-page.component.html',
    styleUrls: ['./opportunities-detials-page.component.css'],
    standalone: true,
    imports: [NgIf, TranslateModule]
})
export class OpportunitiesDetialsPageComponent {
  id:any
  id2: any;
  opportunityDetails : any
  threeNews : any
  constructor( private api : GiaApiService, private router : ActivatedRoute){

      }

      ngOnInit(): void {
        this.getOpportunityDetails( )
      }

      getOpportunityDetails() {
        this.id = this.router.snapshot.paramMap.get('id1');
        this.api.getOpportunities().subscribe({
          next:(response)=>{
            if (response && response.length > this.id){
              this.opportunityDetails =  response[this.id]
            }
          },
          error:(error: any) => {
            //console.log(error),
          () => console.log('Done getting users')}
        })
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


}
