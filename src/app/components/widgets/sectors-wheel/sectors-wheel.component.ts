import { Component, AfterViewInit } from '@angular/core';
import { Opportunity, Sector } from 'src/app/interface/sector';
import { GiaApiService } from 'src/app/service/api/gia-api.service';
import { environment } from 'src/environments/environment';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-sectors-wheel',
    templateUrl: './sectors-wheel.component.html',
    styleUrls: ['./sectors-wheel.component.css'],
    standalone: true,
    imports: [TranslateModule]
})
export class SectorsWheelComponent implements AfterViewInit {
  baseUrl: string = environment.apiEndpoint
  sectors!: any[];
  isLoading = false;
  jsLoaded = false;
  constructor( private api : GiaApiService ){
    this.getInfo();
  }
  ngOnInit() {
    this.isLoading = true;
  }
  ngAfterViewInit() {
      const sector_wheeljs_set = document.createElement('script');
    sector_wheeljs_set.src = '/assets/js/sector-wheel-js-set-1.js';
    document.body.appendChild(sector_wheeljs_set);
    
    const sector_wheel_main = document.createElement('script');
    sector_wheel_main.src = '/assets/js/sector-wheel-main.js';
    document.body.appendChild(sector_wheel_main);
    this.jsLoaded = true;
  }

  getInfo(){
  this.api.getSectors().subscribe({
       next:(response)=>{

  this.sectors=response;
  this.isLoading = false; 
        },
        complete:() =>{
          if(this.jsLoaded)
            this.ngAfterViewInit();
        },
      error:(error: any) => {
      () => console.log('error')}
    })

  }


}

