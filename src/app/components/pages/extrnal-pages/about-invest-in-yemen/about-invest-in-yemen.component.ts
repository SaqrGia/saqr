import { Component } from '@angular/core';
import { GiaApiService } from 'src/app/service/api/gia-api.service';
import { environment } from 'src/environments/environment';
import { FirstSectionComponent } from '../../../widgets/first-section/first-section.component';

@Component({
    selector: 'app-about-invest-in-yemen',
    templateUrl: './about-invest-in-yemen.component.html',
    styleUrls: ['./about-invest-in-yemen.component.css'],
    standalone: true,
    imports: [FirstSectionComponent]
})
export class AboutInvestInYemenComponent {
  baseUrl: string = environment.apiEndpoint
  aboutInvestInYemen: any ;
  constructor( private api : GiaApiService){}
  ngOnInit(): void {
    this.getInfo()
  }
  getInfo(){
    this.api.getAboutInvestInYemenPage().subscribe({
      next:(response)=>{

        this.aboutInvestInYemen =response[0]

      },
      error:(error: any) => {
     }
    })

  }
}
