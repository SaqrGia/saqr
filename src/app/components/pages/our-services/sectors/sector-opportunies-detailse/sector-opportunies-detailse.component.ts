import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Opportunity, Sector } from 'src/app/interface/sector';
import { GiaApiService } from 'src/app/service/api/gia-api.service';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-sector-opportunies-detailse',
    templateUrl: './sector-opportunies-detailse.component.html',
    styleUrls: ['./sector-opportunies-detailse.component.css'],
    standalone: true,
    imports: [NgIf, FormsModule, TranslateModule]
})
export class SectorOpportuniesDetailseComponent {
  id:any
  id2: any;
  opportunityDetails : any
  sectors!: Sector[];
  opportunities: Opportunity[] = [];
  threeNews : any
  constructor( private api : GiaApiService, private router : ActivatedRoute){

      }

      ngOnInit(): void {
        this.getOpportunityDetails( )
      }

      getOpportunityDetails() {
        this.id = this.router.snapshot.paramMap.get('id1');
        this.id2 = this.router.snapshot.paramMap.get('id2');
        this.api.getSectors().subscribe({
          next:(response)=>{
            if (response && response.length > this.id){
              this.opportunityDetails =  response[this.id].view[this.id2];
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
