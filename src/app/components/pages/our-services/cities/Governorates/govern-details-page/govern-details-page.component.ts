import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GiaApiService } from 'src/app/service/api/gia-api.service';
import { environment } from 'src/environments/environment';
import { TranslateModule } from '@ngx-translate/core';
import { OpportunitiesComponent } from '../../../../../widgets/opportunities/opportunities.component';
import { TabsComponent } from '../../../../../widgets/tabs/tabs.component';
import { NgIf, NgFor } from '@angular/common';
import { FirstSectionComponent } from '../../../../../widgets/first-section/first-section.component';

@Component({
    selector: 'app-govern-details-page',
    templateUrl: './govern-details-page.component.html',
    styleUrls: ['./govern-details-page.component.css'],
    standalone: true,
    imports: [FirstSectionComponent, NgIf, TabsComponent, NgFor, OpportunitiesComponent, TranslateModule]
})
export class GovernDetailsPageComponent {
  baseUrl: string = environment.apiEndpoint
  id:any
  governorateDetails:any
  opportunities:any
  showFullText: boolean = false;
  showFullText1: boolean = false;
  showFullText2: boolean = false;
  showFullText3: boolean = false;
  showFullText4: boolean = false;
  showFullText5: boolean = false;
  constructor( private api : GiaApiService, private router : ActivatedRoute, private route :Router ){

  }

  async ngOnInit() {
    await this.getOpportunityDetails( )
  }

  async getOpportunityDetails() {
    this.id = this.router.snapshot.paramMap.get('id');
    this.governorateDetails =(await this.api.getGovernorate().toPromise())[this.id];
    this.opportunities =this.governorateDetails.view

    // this.api.getGovernorate().subscribe({
    //   next:(response)=>{
    //     if (response && response.length > this.id){
    //       this.governorateDetails =  response[this.id];
    //       this.opportunities =this.governorateDetails.view
    //       console.log(this.opportunities)
    //     }
    //   },
    //   error:(error: any) => {
    //     //console.log(error),
    //   () => console.log('Done getting users')}
    // })
  }

  showDetails(productId: number) {
    this.route.navigate(['/governorate-opportunities-details/',this.router.snapshot.paramMap.get('id'), productId]);
  }
}
