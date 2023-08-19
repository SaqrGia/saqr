import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgbCollapseModule, NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { AboutYemenPageComponent } from './components/pages/why-yemen/about-yemen-page/about-yemen-page.component';
import { EconomicProfilesPageComponent } from './components/pages/why-yemen/economic-profiles-page/economic-profiles-page.component';
import { ReportsPageComponent } from './components/pages/resources/reports-page/reports-page.component';
import { InvestmentGuidePageComponent } from './components/pages/resources/investment-guide-page/investment-guide-page.component';
import { IncentivesSchemesPageComponent } from './components/pages/resources/incentives-schemes-page/incentives-schemes-page.component';
import { ServicePackagePageComponent } from './components/pages/our-services/service-package-page/service-package-page.component';
import { SectorsPageComponent } from './components/pages/our-services/sectors/sectors-page/sectors-page.component';
import { SectorsDetailsComponent } from './components/pages/our-services/sectors/sectors-details/sectors-details.component';
import { CitiesPageComponent } from './components/pages/our-services/cities/cities-page/cities-page.component';
import { OpportunitiesPageComponent } from './components/pages/our-services/opportunities/opportunities-page/opportunities-page.component';
import { OpportunitiesDetialsPageComponent } from './components/pages/our-services/opportunities/opportunities-detials-page/opportunities-detials-page.component';
import { ContactUsPageComponent } from './components/pages/contact-us/contact-us-page/contact-us-page.component';
import { CommonQuestionsPageComponent } from './components/pages/media-center/common-questions-page/common-questions-page.component';
import { VirtualLibraryPageComponent } from './components/pages/media-center/virtual-library-page/virtual-library-page.component';
import { NewsEventsPageComponent } from './components/pages/media-center/news/news-events-page/news-events-page.component';
import { NewsEventsDtailsPageComponent } from './components/pages/media-center/news/news-events-dtails-page/news-events-dtails-page.component';
import { EconomicZonesPageComponent } from './components/pages/investor-service-center/economic-zones/economic-zones-page/economic-zones-page.component';
import { EconomicZonesDetailsPageComponent } from './components/pages/investor-service-center/economic-zones/economic-zones-details-page/economic-zones-details-page.component';
import { AgencyOfficesPageComponent } from './components/pages/investor-service-center/agency-offices/agency-offices-page/agency-offices-page.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AboutInvestInYemenComponent } from './components/pages/extrnal-pages/about-invest-in-yemen/about-invest-in-yemen.component';
import { GovernPageComponent } from './components/pages/our-services/cities/Governorates/govern-page/govern-page.component';
import { GovernDetailsPageComponent } from './components/pages/our-services/cities/Governorates/govern-details-page/govern-details-page.component';
import { NgxUiLoaderModule } from "ngx-ui-loader";
import { NgxUiLoaderHttpModule ,NgxUiLoaderConfig,SPINNER,POSITION,PB_DIRECTION  } from 'ngx-ui-loader';
import { SectorOpportuniesDetailseComponent } from './components/pages/our-services/sectors/sector-opportunies-detailse/sector-opportunies-detailse.component';
import { GovernoratesOpportuniesDetailseComponent } from './components/pages/our-services/cities/Governorates/governorates-opportunies-detailse/governorates-opportunies-detailse.component';
import { TabsComponent } from './components/widgets/tabs/tabs.component';
import { FirstSectionComponent } from './components/widgets/first-section/first-section.component';
import { LoginComponent } from './components/pages/auth-pages/login/login.component';
import { SingupComponent } from './components/pages/auth-pages/singup/singup.component';
import { ServicesBoxComponent } from './components/widgets/services-box/services-box.component';
import { InvestGuideBoxComponent } from './components/widgets/invest-guide-box/invest-guide-box.component';
import { SectorsCardComponent } from './components/widgets/sectors-card/sectors-card.component';
import { AgencyOfficeCardComponent } from './components/widgets/agency-office-card/agency-office-card.component';
import { TimeLineComponent } from './components/widgets/time-line/time-line.component';
import { RightImageComponent } from './components/widgets/right-image/right-image.component';
import { LeftImageComponent } from './components/widgets/left-image/left-image.component';
import { GovernoratesCardComponent } from './components/widgets/governorates-card/governorates-card.component';
import { OpportunitiesComponent } from './components/widgets/opportunities/opportunities.component';
import { EconomicZonesCardComponent } from './components/widgets/economic-zones-card/economic-zones-card.component';
import { PdfDownloadCardComponent } from './components/widgets/pdf-download-card/pdf-download-card.component';
import { SectorsWheelComponent } from './components/widgets/sectors-wheel/sectors-wheel.component';
import { NewsCardComponent } from './components/widgets/news-card/news-card.component';
import { YemenMapComponent } from './yemen-map/yemen-map.component';
import { CacheInterceptor } from './interceptors/CacheInterceptor';


const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  fgsColor: 'red',
  fgsPosition: POSITION.bottomCenter,
  fgsSize: 40,
  fgsType: SPINNER.chasingDots,
  pbDirection: PB_DIRECTION.leftToRight,
  pbThickness: 5 ,
  logoSize: 20
}



export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
