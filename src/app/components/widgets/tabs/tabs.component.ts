import { Component, Input } from '@angular/core';
import { TabModel } from './tab-model';
import { NgIf, NgFor } from '@angular/common';

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.css'],
    standalone: true,
    imports: [NgIf, NgFor]
})
export class TabsComponent {
  @Input()
  tabs!:Array<TabModel>;

  @Input()
  hasHead:boolean=false;
  
  @Input()
  paragraphTitle!:string;

  @Input()
  paragraphContent!:string;


  ngOnInit(){
  }
}
