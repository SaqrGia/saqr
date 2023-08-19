import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-economic-zones-card',
    templateUrl: './economic-zones-card.component.html',
    styleUrls: ['./economic-zones-card.component.css'],
    standalone: true,
    imports: [TranslateModule]
})
export class EconomicZonesCardComponent {
  @Input() image!: any;
  @Input() title!: any;
  @Input() details!: any;
  @Input() OpportunityCost!: any;
  @Input() OpportunityWorkforce!: any;
  @Input() OpportunitiesTotal!: any;
}
