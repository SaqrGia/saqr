import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Opportunity, Sector } from 'src/app/interface/sector';
import { GiaApiService } from 'src/app/service/api/gia-api.service';
import { environment } from 'src/environments/environment';
import { TranslateModule } from '@ngx-translate/core';
import { OpportunitiesComponent } from '../../../../widgets/opportunities/opportunities.component';
import { TabsComponent } from '../../../../widgets/tabs/tabs.component';
import { NgIf, NgFor } from '@angular/common';
import { FirstSectionComponent } from '../../../../widgets/first-section/first-section.component';

@Component({
    selector: 'app-sectors-details',
    templateUrl: './sectors-details.component.html',
    styleUrls: ['./sectors-details.component.css'],
    standalone: true,
    imports: [FirstSectionComponent, NgIf, TabsComponent, NgFor, OpportunitiesComponent, TranslateModule]
})
export class SectorsDetailsComponent {
  baseUrl: string = environment.apiEndpoint
  id:any
  sectorDetails : any
  showFullText: boolean = false;
  showFullText1: boolean = false;
  showFullText2: boolean = false;
  showFullText3: boolean = false;
  showFullText4: boolean = false;
  showFullText5: boolean = false;
  sectors: Sector[]= [];
  opportunities: Opportunity[] = [];
  threeNews : any


  governorates: string[] = [];
  selectedGovernorate: string = '';
  selectedSector: string = '';
  searchText: string = '';
  filteredData: any[] = this.filterData();
  constructor( private api : GiaApiService, private router : ActivatedRoute , private route :Router){

      }

      ngOnInit(): void {
        this.getOpportunityDetails( )
      }

      getOpportunityDetails() {
        this.id = this.router.snapshot.paramMap.get('id');
        console.log("id ="+ this.id)
        this.api.getSectors().subscribe({
          next:(response)=>{
            if (response && response.length > this.id){
              this.sectorDetails =  response[this.id];
              this.opportunities =this.sectorDetails.view
              console.log(this.sectorDetails)
            }
          },
          error:(error: any) => {
            //console.log(error),
          () => console.log('Done getting users')}
        })
      }

   

      filterData() {
        let filteredData = this.opportunities;

        // Filter by search text
        if (this.searchText) {
          filteredData = filteredData.filter(item => item.field_opportunity_name.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1);
        }
        return filteredData;
      }

      showDetails(productId: number) {
        this.route.navigate(['/sectors-Opportunities-details/',this.router.snapshot.paramMap.get('id'), productId]);
      }

}
