import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-sectors-card',
    templateUrl: './sectors-card.component.html',
    styleUrls: ['./sectors-card.component.css'],
    standalone: true,
    imports: [RouterLink, TranslateModule]
})
export class SectorsCardComponent {
  baseUrl: string = environment.apiEndpoint
  @Input() image!: any;
  @Input() title!: any;
  @Input() details!: any;
  @Input() OpportunityCost!: any;
  @Input() OpportunityWorkforce: any;
  @Input() OpportunitiesTotal: any;
  @Input() link:any;


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
