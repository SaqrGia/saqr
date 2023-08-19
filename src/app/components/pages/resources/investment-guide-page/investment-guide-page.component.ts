import { Component } from '@angular/core';
import { GiaApiService } from 'src/app/service/api/gia-api.service';
import { environment } from 'src/environments/environment';
import { InvestGuideBoxComponent } from '../../../widgets/invest-guide-box/invest-guide-box.component';
import { TimeLineComponent } from '../../../widgets/time-line/time-line.component';
import { FirstSectionComponent } from '../../../widgets/first-section/first-section.component';

@Component({
    selector: 'app-investment-guide-page',
    templateUrl: './investment-guide-page.component.html',
    styleUrls: ['./investment-guide-page.component.css'],
    standalone: true,
    imports: [FirstSectionComponent, TimeLineComponent, InvestGuideBoxComponent]
})
export class InvestmentGuidePageComponent {
  baseUrl: string = environment.apiEndpoint
  investmentGuide : any ;
  investmentGuideCard : any ;
  constructor( private api : GiaApiService){}
  ngOnInit(): void {
    this.getInfo()
    this.getInvestmentGuideCard()
  }
  getInfo(){
    this.api.getInvestmentGuide().subscribe({
      next:(response)=>{
        console.log(response)

        this.investmentGuide =response[0]
        console.log(this.investmentGuide)

      },
      error:(error: any) => {
        //console.log(error),
      () => console.log('Done getting users')}
    })

  }

  getInvestmentGuideCard(){
    this.api.getInvestmentGuideCard().subscribe({
      next:(response)=>{
        console.log(response)

        this.investmentGuideCard =response
        console.log(this.investmentGuideCard)

      },
      error:(error: any) => {
        //console.log(error),
      () => console.log('Done getting users')}
    })

  }
}
