import { Component } from '@angular/core';
import { GiaApiService } from 'src/app/service/api/gia-api.service';
import { environment } from 'src/environments/environment';
import { TranslateModule } from '@ngx-translate/core';
import { EconomicZonesCardComponent } from '../../../../widgets/economic-zones-card/economic-zones-card.component';
import { RouterLink } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';
import { RightImageComponent } from '../../../../widgets/right-image/right-image.component';
import { FirstSectionComponent } from '../../../../widgets/first-section/first-section.component';

@Component({
    selector: 'app-economic-zones-page',
    templateUrl: './economic-zones-page.component.html',
    styleUrls: ['./economic-zones-page.component.css'],
    standalone: true,
    imports: [FirstSectionComponent, RightImageComponent, NgIf, NgFor, RouterLink, EconomicZonesCardComponent, TranslateModule]
})
export class EconomicZonesPageComponent {
  baseUrl: string = environment.apiEndpoint
  industrialAreas: any ;
  threeEconomicZones: any ;
  showFullText: boolean = false;
  showFullText2: boolean = false;
  constructor( private api : GiaApiService){}
  ngOnInit(): void {
    this.getInfo()
    this.getThreeEconomicZones()
  }
  getInfo(){
    this.api.getEconomicZonePage().subscribe({
      next:(response)=>{
        this.industrialAreas =response[0]
      },
      error:(error: any) => {
        //console.log(error),
      () => console.log('Done getting users')}
    })

  }

  getThreeEconomicZones(){

    this.api.getThreeEconomicZoneOpportunity().subscribe({
      next:(response)=>{

        this.threeEconomicZones = response

      },
      error:(error: any) => {
        //console.log(error),
      }
    })
  }

  
  
  getOpportunityCostSum(i :number) {
    return this.threeEconomicZones[i].view.reduce((total: number, view:any) => {
  var cost=parseInt( view.field_opportunity_cost_as_string);
  var numberOfOpportunities=parseInt( view.field_number_of_opportunities);
  if (isNaN(cost)) 
  cost=0;
  if (isNaN(numberOfOpportunities)) 
  numberOfOpportunities=0;
  var totalCost=cost*numberOfOpportunities;
   return total + totalCost;

 }, 0);
}
getSectorJobsSum(i :number) {
 return this.threeEconomicZones[i].view.reduce((total: number, view:any) => {
  var parsed=parseInt( view.field_opportunities_employment);
  var numberOfOpportunities=parseInt( view.field_number_of_opportunities);

  if (isNaN(numberOfOpportunities)) 
  numberOfOpportunities=0;

  if (isNaN(parsed)) 
  parsed=0;

  var totalnum=parsed*numberOfOpportunities;

   return total + totalnum;
 }, 0);
}

getSectorTotalOpportunitiesSum(i :number) {
 return this.threeEconomicZones[i].view.reduce((total: number, view:any) => {
  var parsed=parseInt( view.field_number_of_opportunities);
  if (isNaN(parsed)) 
  parsed=0;
   return total + parsed;
 }, 0);
}
}
