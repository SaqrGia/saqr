import { Component, Input } from '@angular/core';
import { PdfInfo } from './pdf-info-model';
import { environment } from './../../../../environments/environment';
import { TranslateModule } from '@ngx-translate/core';
@Component({
    selector: 'app-pdf-download-card',
    templateUrl: './pdf-download-card.component.html',
    styleUrls: ['./pdf-download-card.component.css'],
    standalone: true,
    imports: [TranslateModule]
})
export class PdfDownloadCardComponent {
  @Input()
  model: PdfInfo = new PdfInfo;
  baseUrl: string = environment.apiEndpoint
constructor(){
}
}
