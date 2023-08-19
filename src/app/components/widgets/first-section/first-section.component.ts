import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-first-section',
    templateUrl: './first-section.component.html',
    styleUrls: ['./first-section.component.css'],
    standalone: true,
    imports: [TranslateModule]
})
export class FirstSectionComponent {
  @Input() ImageUrl!: string;
  @Input() title!: string;
  baseUrl: string = environment.apiEndpoint
}
