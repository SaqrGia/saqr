import { Component } from '@angular/core';
import { GiaApiService } from 'src/app/service/api/gia-api.service';
import { environment } from 'src/environments/environment';
import { NgFor } from '@angular/common';
import { FirstSectionComponent } from '../../../widgets/first-section/first-section.component';

@Component({
    selector: 'app-service-package-page',
    templateUrl: './service-package-page.component.html',
    styleUrls: ['./service-package-page.component.css'],
    standalone: true,
    imports: [FirstSectionComponent, NgFor]
})
export class ServicePackagePageComponent {
  baseUrl: string = environment.apiEndpoint
  servicePackage: any ;
  serviceBackageServices: any ;
  constructor( private api : GiaApiService){}
  ngOnInit(): void {
    this.getInfo()
    this.getServiceBackageService()
  }
  getInfo(){
    this.api.getServicePackage().subscribe({
      next:(response)=>{
        this.servicePackage =response[0]

      },
      error:(error: any) => {
        //console.log(error),
      () => console.log('Done getting users')}
    })

  }

  getServiceBackageService(){
    this.api.getServiceBackageService().subscribe({
      next:(response)=>{

        this.serviceBackageServices =response

      },
      error:(error: any) => {
        //console.log(error),
      () => console.log('Done getting users')}
    })

  }

}
