import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-opportunities',
    templateUrl: './opportunities.component.html',
    styleUrls: ['./opportunities.component.css'],
    standalone: true,
    imports: [NgIf, TranslateModule]
})
export class OpportunitiesComponent {
  @Input() opportunityName!: any;
  @Input() OpportunitySector!: any;
  @Input() OpportunityCost!: any;
  @Input() OpportunityCity!: any;
  @Input() OpportunityQrcode!: any;
  @Input() OpportunityCount!: any; 
  @Input() JobsOpportunities !: any;  
  @Input() field_opportunities_details:any;
  @Input() downloadUrl:any;
  @Input() haveDownload:boolean=true;

  getCost(){
    var value=parseInt(this.OpportunityCost);
    if (!value) return 0;
    if (value >= 1000000) {
      value = Math.floor(value / 1000000) 
    } else if (value >= 1000) {
      value = Math.floor(value / 1000) 
    }
     return value;
  }

  getCurency(){
    var value=parseInt(this.OpportunityCost);
    if (!value||value==0) return '';
    let newString: any ;
    if (value >= 1000000) {
      newString ="M $"
    } else if (value >= 1000) {
      value = Math.floor(value / 1000) 
      newString = "K $";
    }
    return newString;
  }
}
