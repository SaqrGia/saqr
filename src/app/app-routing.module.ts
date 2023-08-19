import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/pages/auth-pages/login/login.component';
import { SingupComponent } from './components/pages/auth-pages/singup/singup.component';
import { ContactUsPageComponent } from './components/pages/contact-us/contact-us-page/contact-us-page.component';
import { AboutInvestInYemenComponent } from './components/pages/extrnal-pages/about-invest-in-yemen/about-invest-in-yemen.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { AgencyOfficesPageComponent } from './components/pages/investor-service-center/agency-offices/agency-offices-page/agency-offices-page.component';
import { EconomicZonesDetailsPageComponent } from './components/pages/investor-service-center/economic-zones/economic-zones-details-page/economic-zones-details-page.component';
import { EconomicZonesPageComponent } from './components/pages/investor-service-center/economic-zones/economic-zones-page/economic-zones-page.component';
import { CommonQuestionsPageComponent } from './components/pages/media-center/common-questions-page/common-questions-page.component';
import { NewsEventsDtailsPageComponent } from './components/pages/media-center/news/news-events-dtails-page/news-events-dtails-page.component';
import { NewsEventsPageComponent } from './components/pages/media-center/news/news-events-page/news-events-page.component';
import { VirtualLibraryPageComponent } from './components/pages/media-center/virtual-library-page/virtual-library-page.component';
import { CitiesPageComponent } from './components/pages/our-services/cities/cities-page/cities-page.component';
import { GovernDetailsPageComponent } from './components/pages/our-services/cities/Governorates/govern-details-page/govern-details-page.component';
import { GovernPageComponent } from './components/pages/our-services/cities/Governorates/govern-page/govern-page.component';
import { GovernoratesOpportuniesDetailseComponent } from './components/pages/our-services/cities/Governorates/governorates-opportunies-detailse/governorates-opportunies-detailse.component';
import { OpportunitiesDetialsPageComponent } from './components/pages/our-services/opportunities/opportunities-detials-page/opportunities-detials-page.component';
import { OpportunitiesPageComponent } from './components/pages/our-services/opportunities/opportunities-page/opportunities-page.component';
import { SectorOpportuniesDetailseComponent } from './components/pages/our-services/sectors/sector-opportunies-detailse/sector-opportunies-detailse.component';
import { SectorsDetailsComponent } from './components/pages/our-services/sectors/sectors-details/sectors-details.component';
import { SectorsPageComponent } from './components/pages/our-services/sectors/sectors-page/sectors-page.component';
import { ServicePackagePageComponent } from './components/pages/our-services/service-package-page/service-package-page.component';
import { IncentivesSchemesPageComponent } from './components/pages/resources/incentives-schemes-page/incentives-schemes-page.component';
import { InvestmentGuidePageComponent } from './components/pages/resources/investment-guide-page/investment-guide-page.component';
import { ReportsPageComponent } from './components/pages/resources/reports-page/reports-page.component';
import { AboutYemenPageComponent } from './components/pages/why-yemen/about-yemen-page/about-yemen-page.component';
import { EconomicProfilesPageComponent } from './components/pages/why-yemen/economic-profiles-page/economic-profiles-page.component';

const routes: Routes = [


  {path:'', redirectTo:'home' , pathMatch : 'full'},
  {path:'home', component: HomePageComponent},
  //authorized
  {path:'login', component: LoginComponent},
  {path:'singup', component: SingupComponent},

  //About Invest in YEMEN
  {path:'about-invest-in-yemen', component: AboutInvestInYemenComponent},
  //Why Yemen
  {path:'about-yemen', component: AboutYemenPageComponent},
  {path:'economic-profiles', component: EconomicProfilesPageComponent},


  // our services
  {path:'opportunities', component: OpportunitiesPageComponent},
  {path:'opportunities-details/:id1', component: OpportunitiesDetialsPageComponent},

  {path:'cities', component: CitiesPageComponent},

  {path:'sectors', component: SectorsPageComponent},
  {path:'sectors-details/:id', component: SectorsDetailsComponent},
  {path:'sectors-Opportunities-details/:id1/:id2', component: SectorOpportuniesDetailseComponent},

  {path:'service-package', component: ServicePackagePageComponent},

  {path:'governorates', component: GovernPageComponent},
  {path:'governorates-details/:id', component: GovernDetailsPageComponent},
  {path:'governorate-opportunities-details/:id1/:id2', component: GovernoratesOpportuniesDetailseComponent},

  //investor service center

  {path:'agency-offices', component: AgencyOfficesPageComponent},
  
  {path:'economic-zones', component: EconomicZonesPageComponent},
  {path:'economic-zones-details/:id', component: EconomicZonesDetailsPageComponent},

  //resources
  {path:'investment-guide', component: InvestmentGuidePageComponent},
  {path:'incentives-schemes', component: IncentivesSchemesPageComponent},
  {path:'reports', component: ReportsPageComponent},

  // MediaCenter

  {path:'common-questions', component: CommonQuestionsPageComponent},
  {path:'virtual-library', component: VirtualLibraryPageComponent},
  {path:'news-events', component: NewsEventsPageComponent},
  {path: 'news-detailes/:index',component: NewsEventsDtailsPageComponent},


  // contact-us
  {path:'contact-us', component: ContactUsPageComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
