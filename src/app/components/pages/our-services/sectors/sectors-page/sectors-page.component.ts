import { Component } from '@angular/core';
import { Opportunity, Sector } from 'src/app/interface/sector';
import { GiaApiService } from 'src/app/service/api/gia-api.service';
import { environment } from 'src/environments/environment';
import { TranslateModule } from '@ngx-translate/core';
import { SectorsCardComponent } from '../../../../widgets/sectors-card/sectors-card.component';
import { NgFor } from '@angular/common';
import { FirstSectionComponent } from '../../../../widgets/first-section/first-section.component';

@Component({
    selector: 'app-sectors-page',
    templateUrl: './sectors-page.component.html',
    styleUrls: ['./sectors-page.component.css'],
    standalone: true,
    imports: [FirstSectionComponent, NgFor, SectorsCardComponent, TranslateModule]
})
export class SectorsPageComponent {
  baseUrl: string = environment.apiEndpoint
  sectors!: Sector[];
  sector: string[] = [];
  filteredSectors!: Sector[];
  filteredOpportunities!:  any[];
  sectorsPage:  any;
  opportunities: Opportunity[] = [];
  selectedSector: string = '';
  cities: string[] = [];
  selectedCity: string = '';
  searchTerm: string = '';

  constructor( private api : GiaApiService ){
  }
  ngOnInit(): void {
    this.getSectorsPage()
    this.getInfo()
    this.filteredOpportunities
  }

  getSectorsPage(){
    this.api.getSectorsPage().subscribe({
      next:(response)=>{
        this.sectorsPage = response[0]
      },
      error:(error: any) => {
      () => console.log('Done getting users')}
    })

  }

  getInfo(){
    this.api.getSectors().subscribe({
      next:(response)=>{

        this.sectors = response;
      this.filteredSectors = response;
      this.filteredOpportunities = response;
      // console.log(this.filteredSectors)

         // Get all unique sector values from the opportunities data
     this.sector = [...new Set(this.sectors.map(opportunity => opportunity.field_sector_name))];

     // Get all unique city values from the opportunities data
     this.cities = [...new Set(this.sectors.flatMap(opportunity => opportunity.view.map(view => view.field_governorate)))];


     // Initialize filtered opportunities with all opportunities
     this.filterOpportunities();


      },
      error:(error: any) => {
        //console.log(error),
      () => console.log('Done getting users')}
    })

  }

  filterOpportunities() {
    let filteredOpportunities = this.sectors;

    // Filter by sector if a sector is selected
    if (this.selectedSector) {
      filteredOpportunities = filteredOpportunities.filter(opportunity => opportunity.field_sector_name === this.selectedSector);
    }

    // Filter by city if a city is selected
    if (this.selectedCity) {
      filteredOpportunities = filteredOpportunities.filter(opportunity => opportunity.view.some(view => view.field_governorate === this.selectedCity));
    }


    // Filter by search term if a search term is provided
  if (this.searchTerm && this.searchTerm.trim() !== '') {
    const flattenedOpportunities = filteredOpportunities.flatMap(opportunity => opportunity.view);
    filteredOpportunities = filteredOpportunities.filter(opportunity => {
      return flattenedOpportunities.some(view => {
        return view.field_opportunity_name.toLowerCase().includes(this.searchTerm.toLowerCase());
      });
    });
  }

    this.filteredOpportunities = filteredOpportunities;
  }


  getOpportunities(sector: Sector): Opportunity[] {
    return sector.view.slice(0, 4)  ;
  }


  getOpportunityCostSum(i :number) {
       return this.filteredOpportunities[i].view.reduce((total: number, view:any) => {
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
    return this.filteredOpportunities[i].view.reduce((total: number, view:any) => {
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
    return this.filteredOpportunities[i].view.reduce((total: number, view:any) => {
     var parsed=parseInt( view.field_number_of_opportunities);
     if (isNaN(parsed)) 
     parsed=0;
      return total + parsed;
    }, 0);
  }

}
