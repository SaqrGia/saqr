import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private currentLanguage: string;

  constructor(private translate: TranslateService) {
    this.currentLanguage = 'ar';
    let currentLanguage =localStorage.getItem('currentLanguage');
    if(currentLanguage==null)
    this.setCurrentLanguage('ar');
  }

  public setCurrentLanguage(language: string) {

    this.currentLanguage = language;
    this.translate.use(language);
    localStorage.setItem('currentLanguage', language);
  }

  public getCurrentLanguage(): string {
    return this.currentLanguage;
  }

  public isCurrentLanguageRTL(): boolean {
    return this.currentLanguage === 'ar';
  }
}
