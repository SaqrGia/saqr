import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-services-box',
    templateUrl: './services-box.component.html',
    styleUrls: ['./services-box.component.css'],
    standalone: true
})
export class ServicesBoxComponent {
  @Input() header!: string;
  @Input() decryption!: string;
  @Input() title1!: string;
  @Input() title2!: string;
  @Input() title3!: string;
  @Input() title4!: string;
  @Input() details1!: string;
  @Input() details2!: string;
  @Input() details3!: string;
  @Input() details4!: string;
  @Input() icon1!: string;
  @Input() icon2!: string;
  @Input() icon3!: string;
  @Input() icon4!: string;
}
