import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { GiaApiService } from 'src/app/service/api/gia-api.service';
import { environment } from 'src/environments/environment';
import { TranslateModule } from '@ngx-translate/core';
import { OpportunitiesComponent } from '../../../../widgets/opportunities/opportunities.component';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FirstSectionComponent } from '../../../../widgets/first-section/first-section.component';
import { MapComponent } from "../../../../widgets/map/map.component";

@Component({
    selector: 'app-opportunities-page',
    templateUrl: './opportunities-page.component.html',
    styleUrls: ['./opportunities-page.component.css'],
    standalone: true,
    imports: [FirstSectionComponent, FormsModule, NgFor, NgIf, OpportunitiesComponent, TranslateModule, MapComponent]
})
export class OpportunitiesPageComponent {
  baseUrl: string = environment.apiEndpoint
  min : any
  max : any
  opportunities: any[] = [];
  governorates: string[] = [];
  sectors: string[] = [];
  economicZone: string[] = [];
  selectedGovernorate: string = '';
  selectedSector: string = '';
  selectedEconomicZone: string = '';
  searchText: string = '';
  filteredData: any
  filteredData2: any
  page:any;
  constructor( private api : GiaApiService , private router: Router, private cdr:ChangeDetectorRef){
  }
  ngOnInit() {
    this.getPage();
    this.getInfo();
    this.cdr.detectChanges();
  }
  getPage(){
    this.api.getOpportunitiesPage().subscribe({
      next:(response)=>{
        this.page = response[0]
      },
      error:(error: any) => {
              () => console.log(error)}
    })
  }
  getInfo(){
    this.api.getOpportunities().subscribe({
      next:(response)=>{

        this.opportunities = response;

      this.governorates = [...new Set(this.opportunities.map(opportunity => opportunity.field_governorate))];
      this.sectors = [...new Set(this.opportunities.map(item => item.field_sector))];
      this.economicZone = [...new Set(this.opportunities.map(item => item.field_economic_zone))];

      },
      error:(error: any) => {
        //console.log(error),
      () => console.log('Done getting users')}
    })

  }



  filterData() {
    this.filteredData = this.opportunities;

    if (this.selectedGovernorate) {
      this.filteredData = this.filteredData.filter((item: { field_governorate: string; }) => item.field_governorate == this.selectedGovernorate);
    }

    if (this.selectedSector) {
      this.filteredData = this.filteredData.filter((item: { field_sector: string; }) => item.field_sector == this.selectedSector);
    }

    if (this.selectedEconomicZone) {
      this.filteredData = this.filteredData.filter((item: { field_economic_zone: string; }) => item.field_economic_zone == this.selectedEconomicZone);
    }

    if (this.searchText) {
      this.filteredData = this.filteredData.filter((item: { field_opportunity_name: string; }) => item.field_opportunity_name.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1);
    }
    return this.filteredData;
  }

  // search1(): void {
  //   this.filteredData = this.filterData();
  // }

  // search2() {
  //   setTimeout(() => {
  //     this.filteredData = this.opportunities.filter((item) =>
  //     item.field_opportunity_cost >= this.min && item.field_opportunity_cost <= this.max

  //   )
  // }, 0);
  // }

  // search3() {
  //   this.filteredData = this.opportunities.filter((item) => {
  //     const opportunityCost = parseFloat(item.field_opportunity_cost.replace(/,/g, ''));
  //     return !isNaN(opportunityCost) && opportunityCost >= this.min && opportunityCost <= this.max;
  //   });
  // }


  // search22(from: string, to: string) {
  //   this.filteredData2 = this.filteredData.filter((opportunity: { field_opportunity_cost: string; }) =>
  //     parseFloat(opportunity.field_opportunity_cost) >= parseFloat(from) &&
  //     parseFloat(opportunity.field_opportunity_cost) <= parseFloat(to)
  //   );
  //   console.log("hloooo" +this.filteredData2)
  // }


  search() {
    this.filteredData= this.filteredData.filter((opportunity: { field_opportunity_cost_as_string: string; }) =>
      parseFloat(opportunity.field_opportunity_cost_as_string) >= this.min &&
      parseFloat(opportunity.field_opportunity_cost_as_string) <= this.max
    );
    return this.filteredData;

  }









  // filterData() {
  //   let filteredData = this.opportunities;
  //   // Filter by selected governorate
  //   if (this.selectedGovernorate) {
  //     filteredData = filteredData.filter(item => item.field_governorate === this.selectedGovernorate);
  //   }
  //   // Filter by selected sector
  //   if (this.selectedSector) {
  //     filteredData = filteredData.filter(item => item.field_sector === this.selectedSector);
  //   }
  //   // Filter by search text
  //   if (this.searchText) {
  //     filteredData = filteredData.filter(item => item.field_opportunity_name.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1);
  //   }
  //   if (filteredData.length === 0) {
  //     return [{ message: 'No results found.' }];
  //   }
  //   return filteredData;
  // }





}
