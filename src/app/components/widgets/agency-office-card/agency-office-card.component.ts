import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-agency-office-card',
    templateUrl: './agency-office-card.component.html',
    styleUrls: ['./agency-office-card.component.css'],
    standalone: true,
    imports: [TranslateModule]
})
export class AgencyOfficeCardComponent {
  @Input() image!: string;
  @Input() title!: string;
  @Input() email!: string;
  @Input() phone!: string;
  @Input() fax!: string;
  @Input() address!: string;
  @Input() description!: string;
  @Input() id!: string;

  @ViewChild('cardButtons', { read: ElementRef, static: true }) cardButtons!: ElementRef;
  @ViewChild('cardSections', { read: ElementRef, static: true }) cardSections!: ElementRef;

  constructor() {
   }

  ngOnInit(): void {
    this.initializeButtons();
  }

  private initializeButtons(): void {
    const buttons = this.cardButtons.nativeElement.querySelectorAll('button');

    buttons.forEach((btn: HTMLButtonElement) => {
      btn.addEventListener('click', this.handleButtonClick.bind(this));
    });
  }

  private handleButtonClick(e: MouseEvent): void {
    const target = e.target as HTMLButtonElement;
    const targetSection = target.getAttribute('data-section');
    const targetGovernment = target.getAttribute('data-government');
    const governmentCard = document.querySelector('.card[data-government=' + targetGovernment + ']');
  
    if (governmentCard && targetSection) {
      const section = governmentCard.querySelector('.card-main > ' + targetSection);
  
      if (targetSection !== '#about') {
        governmentCard.classList.add('is-active');
      } else {
        governmentCard.classList.remove('is-active');
      }
  
      governmentCard.setAttribute('data-state', targetSection);
  
      this.cardSections.nativeElement.querySelectorAll('.card-section').forEach((s: HTMLElement) => {
        if (s.parentElement && s.parentElement.parentElement && s.parentElement.parentElement.getAttribute('data-government') === targetGovernment) {
          s.classList.remove('is-active');
        }
      });
  
      this.cardButtons.nativeElement.querySelectorAll('button').forEach((b: HTMLButtonElement) => {
        if (b.getAttribute('data-government') === targetGovernment) {
          b.classList.remove('is-active');
        }
      });
  
      if (section) {
        target.classList.add('is-active');
        section.classList.add('is-active');
      }
    }
  }
}
