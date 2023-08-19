import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-governorates-card',
    templateUrl: './governorates-card.component.html',
    styleUrls: ['./governorates-card.component.css'],
    standalone: true,
    imports: [NgFor, RouterLink, TranslateModule]
})
export class GovernoratesCardComponent {
  @Input() governorateImageUrl!: string;
  @Input() governorates!: any;
}
