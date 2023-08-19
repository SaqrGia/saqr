
import { Component, HostListener,OnInit,Input, Renderer2 } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { GiaApiService } from 'src/app/service/api/gia-api.service';

import { LanguageService } from 'src/app/service/language.service';

import { NgbCollapseModule, NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
import { right } from '@popperjs/core';
import { RouterLink } from '@angular/router';
import { NgClass, UpperCasePipe } from '@angular/common';


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    standalone: true,
    imports: [NgClass, RouterLink, NgbCollapse, UpperCasePipe, TranslateModule]
})
export class NavbarComponent {
  @Input () header__transparent : string | undefined;
  public isCollapsed = true;
  public isCollapsed1 = true;
  public isCollapsed2 = true;
  public isCollapsed3 = true;
  public isCollapsed4 = true;
  public isCollapsed2_1 = true;
  navIcon : string = "fa-arrow-right"

  public newsList: any
  constructor(
    private  apiService : GiaApiService,
    public translate: TranslateService,
    public languageService: LanguageService ,
    private renderer: Renderer2,
    ) {}


  public changeLanguage(language: string) {
    this.languageService.setCurrentLanguage(language);
    this.translate.use(language);
    this.reloadPage()
  }

  currentLanguage:any='ar';
  reloadPage() {
    window.location.href="/";
    // setTimeout(()=>{
    //   window.location.reload();
    // }, 50);
}
  ngOnInit(): void {
    this.renderer.setAttribute(document.documentElement, 'lang', this.languageService.getCurrentLanguage());
    this.currentLanguage = this.languageService.getCurrentLanguage();
    this.displaylang();
  }



  public getNews() {
    this.apiService.getNews().subscribe((response) => {
      this.newsList = response;
    });
  }


  headerSticky : boolean = false;
  showSidebar : boolean = false;

  // sticky nav
  @HostListener('window:scroll',['$event']) onscroll () {
    if(window.scrollY > 80){
      this.headerSticky = true
    }
    else{
      this.headerSticky = false
    }
  }

  // handleSidebar
  handleSidebar () {
    this.showSidebar = true;
  }
  handleSidebarClose () {
    this.showSidebar = false;
  }

  getStyle(): { float: string } {
    return { float: this.languageService.isCurrentLanguageRTL() ? 'left' : 'right' };
  }

  lang1:any='';
  lang:any ='';
  displaylang() :any{

    this.lang = this.languageService.getCurrentLanguage();
    if(this.lang == 'ar'){
      this.lang1="English";
    }else{
      this.lang1 ="العربية";
    }
  return this.lang1
  }

  switchLanguage() {
    this.reloadPage()
    this.languageService.setCurrentLanguage(  this.languageService.getCurrentLanguage() === 'en' ? 'ar' : 'en');
  }

  getStyle_posi_submenu(): { 'right': string } {
    return { 'right': this.languageService.isCurrentLanguageRTL() ? '0 !important' : 'none' };
  }

  getStyle_posi_sub2(): { 'right': string } {
    return { 'right': this.languageService.isCurrentLanguageRTL() ? '100%' : 'none' };
  }

  get_navIcon(){
    this.languageService.isCurrentLanguageRTL() ? this.navIcon = "fa-arrow-left" : this.navIcon = "fa-arrow-right";
  }

  hide_phone_nav(): { 'display': string} {
    return { 'display': 'none' };
  }
  show_phone_nav(): { 'display': string} {
    return { 'display': 'block' };
  }
}
// .main-menu ul li .submenu li .has-dropdown a ::after{
//   transform:translateY(-50%) rotate(90deg);
//   left: 30px;
// }
