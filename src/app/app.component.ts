
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { trigger, transition, style, query, group, animateChild, animate } from '@angular/animations';
import { LanguageService } from './service/language.service';
import { Meta } from '@angular/platform-browser';
import { GiaApiService } from './service/api/gia-api.service';
import { FooterComponent } from './components/layout/footer/footer.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        trigger('routeAnimations', [
            transition(':enter', [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    transform: 'translateX(100%)'
                }),
                animate('0.5s ease-in-out', style({
                    transform: 'translateX(0%)'
                }))
            ]),
            transition(':leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    transform: 'translateX(0%)'
                }),
                animate('0.5s ease-in-out', style({
                    transform: 'translateX(-100%)'
                }))
            ])
        ])
    ],
    standalone: true,
    imports: [NgxUiLoaderModule, NavbarComponent, RouterOutlet, FooterComponent, TranslateModule]
})
export class AppComponent  {
  title = 'gia-website';
  description: string = 'يعتبر موقع الهيئة العامة للاستثمار في اليمن المنصة المثالية لجميع المستثمرين المهتمين بالاستثمار في اليمن، حيث يتميز بتوفير معلومات مفصلة ودقيقة عن الأعمال التجارية والفرص الاستثمارية المتاحة في اليمن، بالإضافة إلى كونه مصدرًا موثوقًا لأحدث الأخبار والمستجدات الاقتصادية والاستثمارية في اليمن'
  titleDescription: string = 'الهيئة العامة للاستثمار'
  constructor(
    public translate: TranslateService,
    public languageService: LanguageService ,
    private router: Router,
    public metaService: Meta,
    private api : GiaApiService) {

      // go up when router is initialized
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          window.scrollTo(0, 0);
          window.scrollTo(1, 1);

        }
      });

      //translate
    translate.setDefaultLang('en');

    const currentLanguage = localStorage.getItem('currentLanguage');
    if (currentLanguage) {
      languageService.setCurrentLanguage(currentLanguage);
    }

    const html = document.querySelector('html');
    if (html) {
      html.setAttribute('dir', this.languageService.isCurrentLanguageRTL() ? 'rtl' : 'ltr');
    }

    this.metaService.updateTag({ property: 'og:description', content: this.description });
    this.metaService.updateTag({ property: 'og:title', content: this.titleDescription });

  }


  getStyle(): { 'font-family': string } {
    return { 'font-family': this.languageService.isCurrentLanguageRTL() ? 'Tajawal' : 'Brando Arabic' };
  }




}

