import { Component } from '@angular/core';
import { GiaApiService } from 'src/app/service/api/gia-api.service';
import { environment } from 'src/environments/environment';
import * as AOS from 'aos';
import { TranslateModule } from '@ngx-translate/core';
import { NgIf } from '@angular/common';
import { ServicesBoxComponent } from '../../../widgets/services-box/services-box.component';
import { FirstSectionComponent } from '../../../widgets/first-section/first-section.component';

@Component({
    selector: 'app-incentives-schemes-page',
    templateUrl: './incentives-schemes-page.component.html',
    styleUrls: ['./incentives-schemes-page.component.css'],
    standalone: true,
    imports: [FirstSectionComponent, ServicesBoxComponent, NgIf, TranslateModule]
})
export class IncentivesSchemesPageComponent {
  baseUrl: string = environment.apiEndpoint
  incentivesScheme: any ;
  constructor( private api : GiaApiService){}

  ngOnInit(): void {
    this.getInfo()
    AOS.init({
      duration: 1200,
      delay: 200
    });
  }
  getInfo(){
    this.api.getIncentivesSchemes().subscribe({
      next:(response)=>{
        console.log(response)

        this.incentivesScheme =response[0]
        console.log(this.incentivesScheme)

      },
      error:(error: any) => {
        //console.log(error),
      () => console.log('Done getting users')}
    })

  }
}
