import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-invest-guide-box',
    templateUrl: './invest-guide-box.component.html',
    styleUrls: ['./invest-guide-box.component.css'],
    standalone: true
})
export class InvestGuideBoxComponent {
  @Input() header!: string;
  @Input() title1!: string;
  @Input() title2!: string;
  @Input() title3!: string;
  @Input() title4!: string;
  @Input() details1!: string;
  @Input() details2!: string;
  @Input() details3!: string;
  @Input() details4!: string;
}
