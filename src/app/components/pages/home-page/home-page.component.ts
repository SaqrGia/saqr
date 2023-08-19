import { Component, AfterViewInit} from '@angular/core';
import * as AOS from 'aos';
import { GiaApiService } from 'src/app/service/api/gia-api.service';
import { environment } from 'src/environments/environment';
import { TranslateModule } from '@ngx-translate/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { AgencyOfficeCardComponent } from '../../widgets/agency-office-card/agency-office-card.component';
import { NewsCardComponent } from '../../widgets/news-card/news-card.component';
import { OpportunitiesComponent } from '../../widgets/opportunities/opportunities.component';
import { NgIf, NgFor } from '@angular/common';
import { YemenMapComponent } from '../../../yemen-map/yemen-map.component';
import { SectorsWheelComponent } from '../../widgets/sectors-wheel/sectors-wheel.component';
import { ServicesBoxComponent } from '../../widgets/services-box/services-box.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css'],
    standalone: true,
    imports: [RouterLink, ServicesBoxComponent, SectorsWheelComponent, YemenMapComponent, NgIf, NgFor, OpportunitiesComponent, NewsCardComponent, AgencyOfficeCardComponent, NgxPaginationModule, TranslateModule]
})


export class HomePageComponent implements AfterViewInit {
  threeNews: any
  homePageDetails: any;
  slider: any;
  threeSectors: any;
  forOpportunities: any;
  agencyOffice: any = [];

  baseUrl: string = environment.apiEndpoint

  constructor(private api: GiaApiService) { }

  async ngOnInit() {
    this.getThreeNews()
    this.getInfo()
    this.loadVisJsScript()
    this.getHomeSlider()
    this.getThreeSectors()
    await this.getForOpportunities()
    await this.getAgencyOffice()
    AOS.init({
      duration: 1200,
      delay:200
  });


  }
   ngAfterViewInit() {
    
  }
  getThreeNews() {

    this.api.getThreeNews().subscribe({
      next: (response) => {
        this.threeNews = response

      },
      error: (error: any) => {
      }
    })
  }


  getInfo() {
    this.api.getHomePage().subscribe({
      next: (response) => {

        this.homePageDetails = response[0]

      },
      error: (error: any) => {
      }
    })

  }


  getHomeSlider() {
    this.api.getHomeSlider().subscribe({
      next: (response) => {
        this.slider = response[0]

      },
      error: (error: any) => {
       
      }
    })

  }

  loadVisJsScript() {
    let script = document.createElement('script');
    script.src = "../../assets/custom.js";
    script.type = 'text/javascript';
    script.async = true;
    script.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(script);
    console.log("js script");
  }


  getThreeSectors() {

    this.api.getThreeSectors().subscribe({
      next: (response) => {

        this.threeSectors = response

      },
      error: (error: any) => {
      }
    })
  }

  async getForOpportunities() {

    try {
      const response = await this.api.getForOpportunities().toPromise();
      this.forOpportunities = response;
    } catch (error) {
      console.error(error);
    } 
  }

  async  getAgencyOffice() {
    try {
      const response = await this.api.getAgencyOffice().toPromise();
      this.agencyOffice = response;
    } catch (error) {
      console.error(error);
    } 

  }
}
