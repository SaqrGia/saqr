import { Component } from '@angular/core';
import { TabModel } from 'src/app/components/widgets/tabs/tab-model';
import { GiaApiService } from 'src/app/service/api/gia-api.service';
import { environment } from 'src/environments/environment';
import { TranslateModule } from '@ngx-translate/core';
import { TabsComponent } from '../../../widgets/tabs/tabs.component';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { FirstSectionComponent } from '../../../widgets/first-section/first-section.component';


@Component({
    selector: 'app-about-yemen-page',
    templateUrl: './about-yemen-page.component.html',
    styleUrls: ['./about-yemen-page.component.css'],
    standalone: true,
    imports: [FirstSectionComponent, NgIf, RouterLink, TabsComponent, TranslateModule]
})
export class AboutYemenPageComponent {
  baseUrl: string = environment.apiEndpoint
  aboutYemen: any;
  tabs: Array<TabModel> = new Array<TabModel>();
  showFullText: boolean = false;
  showFullText1: boolean = false;
  showFullText2: boolean = false;
  showFullText3: boolean = false;
  showFullText4: boolean = false;
  showFullText5: boolean = false;
  constructor(private api: GiaApiService) {


  }
  ngOnInit(): void {
    this.getInfo()
  }
  getInfo() {
    this.api.getAboutYemen().subscribe({
      next: (response) => {
        this.aboutYemen = response[0]
        this.tabs.push({ title: this.aboutYemen?.field_about_yemen_box_1_title, 
                        content: this.aboutYemen.field_about_yemen_box_1_details,
                        imageUrl:this.baseUrl+this.aboutYemen.field_about_yemen_box_1_image });
        this.tabs.push({ title: this.aboutYemen?.field_about_yemen_box_2_title, 
                        content: this.aboutYemen.field_about_yemen_box_2_details ,
                        imageUrl:this.baseUrl+this.aboutYemen.field_about_yemen_box_2_image});
        this.tabs.push({ title: this.aboutYemen?.field_about_yemen_box_3_title, 
                          content: this.aboutYemen.field_about_yemen_box_3_details ,
                          imageUrl:this.baseUrl+this.aboutYemen.field_about_yemen_box_3_image});
        this.tabs.push({ title: this.aboutYemen?.field_about_yemen_box_4_title, 
                            content: this.aboutYemen.field_about_yemen_box_4_details ,
                            imageUrl:this.baseUrl+this.aboutYemen.field_about_yemen_box_4_image});
      },
      error: (error: any) => {
        //console.log(error),
        () => console.log('Done getting users')
      }
    })

  }

}
