import { Component, ElementRef } from '@angular/core';
import { GiaApiService } from 'src/app/service/api/gia-api.service';
import { TranslateService } from '@ngx-translate/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';
import { RightImageComponent } from '../../../widgets/right-image/right-image.component';
import { TabsComponent } from '../../../widgets/tabs/tabs.component';
import { LeftImageComponent } from '../../../widgets/left-image/left-image.component';
import { FirstSectionComponent } from '../../../widgets/first-section/first-section.component';

@Component({
    selector: 'app-economic-profiles-page',
    templateUrl: './economic-profiles-page.component.html',
    styleUrls: ['./economic-profiles-page.component.css'],
    standalone: true,
    imports: [FirstSectionComponent, LeftImageComponent, TabsComponent, RightImageComponent]
})
export class EconomicProfilesPageComponent {
  baseUrl: string = environment.apiEndpoint
  economicProfiles: any ;
   console: any;

 
   constructor(private api: GiaApiService, private el: ElementRef , private modalService: NgbModal) {}
 
   ngOnInit(): void {
     this.getInfo();
   }

   getInfo() {
     this.api.getEconomicProfile().subscribe({
       next: (response) => {
          this.economicProfiles = response[0];
       },
       error: (error: any) => {
         //console.log(error),
         () => console.log('Done getting users');
       },
     });
   }
 

















}
