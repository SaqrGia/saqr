import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
    selector: 'app-time-line',
    templateUrl: './time-line.component.html',
    styleUrls: ['./time-line.component.css'],
    standalone: true,
    imports: [NgFor, NgIf]
})
export class TimeLineComponent {
  
  @Input() header!: string;
  @Input() decryption!: string;
  @Input() title: any;
  @Input() details: any;
  @Input() data: any;
 

}
