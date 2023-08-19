import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GiaApiService } from 'src/app/service/api/gia-api.service';
import { environment } from 'src/environments/environment';
import { TranslateModule } from '@ngx-translate/core';
import { OpportunitiesComponent } from '../../../../widgets/opportunities/opportunities.component';
import { NgFor, NgIf } from '@angular/common';
import { TabsComponent } from '../../../../widgets/tabs/tabs.component';
import { RightImageComponent } from '../../../../widgets/right-image/right-image.component';
import { FirstSectionComponent } from '../../../../widgets/first-section/first-section.component';

@Component({
    selector: 'app-economic-zones-details-page',
    templateUrl: './economic-zones-details-page.component.html',
    styleUrls: ['./economic-zones-details-page.component.css'],
    standalone: true,
    imports: [FirstSectionComponent, RightImageComponent, TabsComponent, NgFor, OpportunitiesComponent, NgIf, TranslateModule]
})
export class EconomicZonesDetailsPageComponent {
  baseUrl: string = environment.apiEndpoint
  id:any
  economicZoneDetails:any
  opportunities:any
  showFullText: boolean = false;
  constructor( private api : GiaApiService, private router : ActivatedRoute, private route :Router ){

  }

  ngOnInit(): void {
    this.getOpportunityDetails( )
  }

  getOpportunityDetails() {
    this.id = this.router.snapshot.paramMap.get('id');
    this.api.getEconomicZoneOpportunity().subscribe({
      next:(response)=>{
        if (response && response.length > this.id){
          this.economicZoneDetails =  response[this.id];
          this.opportunities =this.economicZoneDetails.view

        }
      },
      error:(error: any) => {
        //console.log(error),
      () => console.log('Done getting users')}
    })
  }

  showDetails(productId: number) {
    this.route.navigate(['/economic-zones-Opportunities/',this.router.snapshot.paramMap.get('id'), productId]);
  }
}
