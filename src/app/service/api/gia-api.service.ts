import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Sector } from 'src/app/interface/sector';
import { LanguageService } from '../language.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GiaApiService {


  private baseUrl:  string = environment.apiEndpoint;
  private headers;
  constructor(private http : HttpClient, private languageService: LanguageService) {
     this.headers = new HttpHeaders().set('Cache-Control', 'max-age=600');

   }
   

  //  getOpportunities(userInfo: any): Observable<any> {
  //   return this.http.post<any>(`${this.baseUrl}`+'opportunities', userInfo);
  // }

  // get(){
  //   return this.http.get<any>(this.baseUrl);
  //  }

   getNews(){
    return this.http.get<any>(`${this.baseUrl}/${this.languageService.getCurrentLanguage()}/`+'api/news', { headers:this.headers });
   }

   getThreeNews(){
    return this.http.get<any>(`${this.baseUrl}/${this.languageService.getCurrentLanguage()}/`+'api/news', { headers:this.headers }).pipe(
      map(response => response.slice(0,3))
    );
   }

   getEvent(){
    return this.http.get<any>(this.baseUrl+'en/api/events', { headers:this.headers });
   }
   getOpportunitiesPage(){
    return this.http.get<Event[]>(`${this.baseUrl}/${this.languageService.getCurrentLanguage()}/`+'api/opportunities_page', { headers:this.headers });
   }
   getOpportunities(){
    return this.http.get<Event[]>(`${this.baseUrl}/${this.languageService.getCurrentLanguage()}/`+'api/opportunities-api', { headers:this.headers });
   }

   getForOpportunities(){
    return this.http.get<any>(`${this.baseUrl}/${this.languageService.getCurrentLanguage()}/`+'api/opportunities-api', { headers:this.headers }).pipe(
      map(response => response.slice(0,4))
    );;
   }

   getSIRUReports(){
    return this.http.get<Event[]>(`${this.baseUrl}/${this.languageService.getCurrentLanguage()}/`+'api/sirureports', { headers:this.headers });
   }

   getGPReports(){
    return this.http.get<Event[]>(`${this.baseUrl}/${this.languageService.getCurrentLanguage()}/`+'api/gpreports', { headers:this.headers });
   }

   getTPRReports(){
    return this.http.get<Event[]>(`${this.baseUrl}/${this.languageService.getCurrentLanguage()}/`+'api/tprreports', { headers:this.headers });
   }


   getAgencyOffice(){
    return this.http.get<any>(`${this.baseUrl}/${this.languageService.getCurrentLanguage()}/`+'api/agency_offices_cards', { headers:this.headers });
   }

   getAgencyOfficePage(){
    return this.http.get<any>(`${this.baseUrl}/${this.languageService.getCurrentLanguage()}/`+'api/agency-offices-page', { headers:this.headers });
   }



   getHomePage(){
    return this.http.get<any>(`${this.baseUrl}/${this.languageService.getCurrentLanguage()}/`+'api/home', { headers:this.headers });
   }



   getMap(){
    return this.http.get<any>(`${this.baseUrl}/${this.languageService.getCurrentLanguage()}/`+'api/map', { headers:this.headers });
   }

   getAboutYemen(){
    return this.http.get<any>(`${this.baseUrl}/${this.languageService.getCurrentLanguage()}/`+'api/about-yemen-api', { headers:this.headers });
   }

   getServicePackage(){
    return this.http.get<any>(`${this.baseUrl}/${this.languageService.getCurrentLanguage()}/`+'api/service-package', { headers:this.headers });
   }


   getInvestmentGuide(){
    return this.http.get<any>(`${this.baseUrl}/${this.languageService.getCurrentLanguage()}/`+'api/Investment-guide', { headers:this.headers });
   }


   getReportPage(){
    return this.http.get<any>(`${this.baseUrl}/${this.languageService.getCurrentLanguage()}/`+'api/reports-page', { headers:this.headers });
   }

   getSectors(){
    return this.http.get<Sector[]>(`${this.baseUrl}/${this.languageService.getCurrentLanguage()}/`+'api/sectors', { headers:this.headers });
   }
   getThreeSectors(){
    return this.http.get<any>(`${this.baseUrl}/${this.languageService.getCurrentLanguage()}/`+'api/sectors').pipe(
      map(response => response.slice(0,3))
    );
   }
   getEconomicProfile(){
    return this.http.get<any>(`${this.baseUrl}/${this.languageService.getCurrentLanguage()}/`+'api/economic-profile-api', { headers:this.headers });
   }

   getGovernorate(){
    return this.http.get<any>(`${this.baseUrl}/${this.languageService.getCurrentLanguage()}/`+'api/governorates', { headers:this.headers });
   }
   getEconomicZoneOpportunity(){
    return this.http.get<any>(`${this.baseUrl}/${this.languageService.getCurrentLanguage()}/`+'api/economic-zones-api', { headers:this.headers });
   }
   getThreeEconomicZoneOpportunity(){
    return this.http.get<any>(`${this.baseUrl}/${this.languageService.getCurrentLanguage()}/`+'api/economic-zones-api').pipe(
      map(response => response.slice(0,4))
    );
   }

   getEconomicZonePage(){
    return this.http.get<any>(`${this.baseUrl}/${this.languageService.getCurrentLanguage()}/`+'api/industrial-areas-api', { headers:this.headers });
   }


   getIncentivesSchemes(){
    return this.http.get<any>(`${this.baseUrl}/${this.languageService.getCurrentLanguage()}/`+'api/incentives-schemes', { headers:this.headers });
   }
   getServiceBackageService(){
    return this.http.get<any>(`${this.baseUrl}/${this.languageService.getCurrentLanguage()}/`+'api/service-backage-service-api', { headers:this.headers });
   }
   getInvestmentGuideCard(){
    return this.http.get<any>(`${this.baseUrl}/${this.languageService.getCurrentLanguage()}/`+'api/Investment-guide-card-api', { headers:this.headers });
   }


   getAboutInvestInYemenPage(){
    return this.http.get<any>(`${this.baseUrl}/${this.languageService.getCurrentLanguage()}/`+'api/About_invest_in_yemen_page_view', { headers:this.headers });
   }


   getVirtualLibraryPage(){
    return this.http.get<any>(`${this.baseUrl}/${this.languageService.getCurrentLanguage()}/`+'api/virtual_library-page', { headers:this.headers });
   }
   getVirtualLibraryCard(){
    return this.http.get<any>(`${this.baseUrl}/${this.languageService.getCurrentLanguage()}/`+'api/virtual-library-card', { headers:this.headers });
   }


   getNewsPage(){
    return this.http.get<any>(`${this.baseUrl}/${this.languageService.getCurrentLanguage()}/`+'api/news-page', { headers:this.headers });
   }

   getNewsPost(){
    return this.http.get<any>(`${this.baseUrl}/${this.languageService.getCurrentLanguage()}/`+'api/news', { headers:this.headers });
   }

   getSectorsPage(){
    return this.http.get<any>(`${this.baseUrl}/${this.languageService.getCurrentLanguage()}/`+'api/sectors_page', { headers:this.headers });
   }

   getGovernoratePage(){
    return this.http.get<any>(`${this.baseUrl}/${this.languageService.getCurrentLanguage()}/`+'api/governorate_page', { headers:this.headers });
   }

   getCommonQuestionsPage(){
    return this.http.get<any>(`${this.baseUrl}/${this.languageService.getCurrentLanguage()}/`+'api/common-questions-page', { headers:this.headers });
   }




   getContactUsPage(){
    return this.http.get<any>(`${this.baseUrl}/${this.languageService.getCurrentLanguage()}/`+'api/contact_us_page', { headers:this.headers });
   }


   getContactUsCard(){
    return this.http.get<any>(`${this.baseUrl}/${this.languageService.getCurrentLanguage()}/`+'api/contact_us_card', { headers:this.headers });
   }

   getCommonQuestions(){
    return this.http.get<any>(`${this.baseUrl}/${this.languageService.getCurrentLanguage()}/`+'api/grp_que_nested', { headers:this.headers });
   }






   //slider
   getHomeSlider(){
    return this.http.get<any>(`${this.baseUrl}/${this.languageService.getCurrentLanguage()}/`+'api/home-slide', { headers:this.headers });
   }
  //  get news details
  //  getNewsDetails(id:any){
  //   return this.http.get<any>(`${this.baseUrl}/${this.languageService.getCurrentLanguage()}/`+'jsonapi/node/news?filter[drupal_internal__nid]='+id);
  //  }

  // getNewsDetails(id:any){
  //      return this.http.get('http://example.com/data.json', { responseType: 'json' })
  //      .subscribe(data =&gt; {
  //        let title = data.data[0].attributes.title;
  //        console.log(title);
  //      });
  //     }



  contactMessage(userObj:any){
    return this.http.post<any>(`${this.baseUrl}`+'/webform_rest/submit?_format=json',userObj);
  }
}
