import { Component } from '@angular/core';
import { GiaApiService } from 'src/app/service/api/gia-api.service';
import { environment } from 'src/environments/environment';
import { TranslateModule } from '@ngx-translate/core';
import { NgFor, NgClass } from '@angular/common';
import { FirstSectionComponent } from '../../../widgets/first-section/first-section.component';

@Component({
    selector: 'app-common-questions-page',
    templateUrl: './common-questions-page.component.html',
    styleUrls: ['./common-questions-page.component.css'],
    standalone: true,
    imports: [FirstSectionComponent, NgFor, NgClass, TranslateModule]
})
export class CommonQuestionsPageComponent {
  baseUrl: string = environment.apiEndpoint
  commonQuestionsPage:any
  commonQuestions:any
  selectedQuestion: any;
  constructor( private api : GiaApiService){ }

  ngOnInit(): void {
    this.getCommonQuestionsPage()
    this.getCommonQuestions()
  }
  getCommonQuestionsPage(){
    this.api.getCommonQuestionsPage().subscribe({
      next:(response)=>{
        this.commonQuestionsPage = response[0]
      },
      error:(error: any) => {
        //console.log(error),
      () => console.log('Done getting users')}
    })

  }

  getCommonQuestions(){
    this.api.getCommonQuestions().subscribe({
      next:(response)=>{
        this.commonQuestions = response
        this.selectedQuestion = this.commonQuestions[0];
        this.selectedQuestion.view[0]['isOpen'] = true;
      },
      error:(error: any) => {
        //console.log(error),
      () => console.log('Done getting users')}
    })

  }
  onSelect(question: any) {
    this.selectedQuestion = question;
  }

  toggleAnswer(index: number) {
    this.selectedQuestion.view[index]['isOpen'] = !this.selectedQuestion.view[index]['isOpen'];
  }
}
