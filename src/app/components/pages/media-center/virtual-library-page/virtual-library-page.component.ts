import { Component } from '@angular/core';
import { PdfInfo } from 'src/app/components/widgets/pdf-download-card/pdf-info-model';
import { GiaApiService } from 'src/app/service/api/gia-api.service';
import { environment } from 'src/environments/environment';
import { PdfDownloadCardComponent } from '../../../widgets/pdf-download-card/pdf-download-card.component';
import { NgFor } from '@angular/common';
import { FirstSectionComponent } from '../../../widgets/first-section/first-section.component';

@Component({
    selector: 'app-virtual-library-page',
    templateUrl: './virtual-library-page.component.html',
    styleUrls: ['./virtual-library-page.component.css'],
    standalone: true,
    imports: [FirstSectionComponent, NgFor, PdfDownloadCardComponent]
})
export class VirtualLibraryPageComponent {
  virtualLibraryPage: any
  virtualLibrary: any
  itemList = new Array<PdfInfo>();
  baseUrl: string = environment.apiEndpoint
  constructor(private api: GiaApiService) { }

  ngOnInit(): void {
    this.getVirtualLibraryPage()
    this.getVirtualLibraryCard()
  }

  getVirtualLibraryPage() {
    this.api.getVirtualLibraryPage().subscribe({
      next: (response) => {
        this.virtualLibraryPage = response[0]
      },
      error: (error: any) => {
        () => console.log('Done getting users')
      }
    })

  }

  getVirtualLibraryCard() {
    this.api.getVirtualLibraryCard().subscribe({
      next: (response) => {
        this.virtualLibrary = response
        for (var i = 0; i < this.virtualLibrary.length; i++) {
          var x = new PdfInfo();
          x.field_sirur_title = this.virtualLibrary[i].field_virtual_library_name;
          x.field_sirur_details= this.virtualLibrary[i].field_virtual_library_descriptio;
          x.field_sirur_image=this.virtualLibrary[i].field_gp_report_image//"sites/default/files/2023-04/Screenshot%202023-04-29%20at%2011-29-59%20files_yemens_economic_collapse_and_impending_famine_ar.pdf__1.png";
          x.download_url=this.virtualLibrary[i].field_library_file;
          this.itemList.push(x);
        }
      },
      error: (error: any) => {
      }
    })

  }
}
