import { Component } from '@angular/core';
import { LanguageService } from 'src/app/service/language.service';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css'],
    standalone: true,
    imports: [RouterLink, FormsModule, TranslateModule]
})
export class FooterComponent {
  constructor( public languageService: LanguageService  ){
  }
  currentLanguage:any='ar';
  ngOnInit(): void {
    this.currentLanguage = this.languageService.getCurrentLanguage();
  }
  getStyle_footer__social(): { 'text-align': string } {
    return { 'text-align': this.languageService.isCurrentLanguageRTL() ? 'left' : 'right' };
  }

  footer_button : string = "0"
  getStyle_footer__newsletter__button(){
    this.languageService.isCurrentLanguageRTL() ? this.footer_button = "ar" : this.footer_button = "en";
  }
}
