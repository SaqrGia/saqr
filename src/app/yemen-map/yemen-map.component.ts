import { AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Renderer2 } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { GiaApiService } from 'src/app/service/api/gia-api.service';
import { Router, RouterLink } from '@angular/router';
import { environment } from 'src/environments/environment';
import { NgFor, SlicePipe } from '@angular/common';

@Component({
    selector: 'app-yemen-map',
    templateUrl: './yemen-map.component.html',
    styleUrls: ['./yemen-map.component.css'],
    standalone: true,
    imports: [
        NgFor,
        RouterLink,
        SlicePipe,
        TranslateModule,
    ],
})
export class YemenMapComponent implements AfterViewChecked {

  constructor(private el: ElementRef, private renderer: Renderer2, private translate: TranslateService, private api: GiaApiService, private router: Router, private elementRef: ElementRef) { }

  economicZones: any[] = [];
  

  baseUrl: string = environment.apiEndpoint
  ngOnInit(): void {
    this.getInfo()

  }

  getInfo() {
    this.api.getEconomicZoneOpportunity().subscribe({
      next: (response) => {
        this.economicZones = response;
      },
      error: (error: any) => {
        console.log(error)
      }
    })

  }
  ngAfterViewChecked() {

  }
  ngAfterViewInit() {
    this.addEventListeners();
  }

  addEventListeners() {
    const governmentPaths = this.el.nativeElement.querySelectorAll('.government-path');
    const selectedGov = this.el.nativeElement.querySelectorAll('.selected-gov');
    const yemen_map = this.el.nativeElement.querySelector('.yemen-map ');


    governmentPaths.forEach((govPath: Element) => {

      this.renderer.listen(govPath, 'click', (event) => {
        const dAttr = govPath.getAttribute('d');
        const dTitle = govPath.getAttribute('title');
        if (dAttr !== null) {
          this.renderer.setAttribute(
            selectedGov[0], "d", dAttr);
          this.renderer.setAttribute(
            selectedGov[1], "d", dAttr);

          this.renderer.setAttribute(
            selectedGov[1], "title", dTitle!);

          this.renderer.setAttribute(
            selectedGov[1], "marker-start", govPath.getAttribute("marker-start")!);
        };

        //======================================
        const economicZone_content = this.el.nativeElement.querySelectorAll('.economicZone-content');
        const nId = govPath.getAttribute('data-index');
        const content = this.el.nativeElement.querySelector('[data-index="' + nId + '"]')

        economicZone_content.forEach((el: any) => {
          el.style.opacity = '0';
          el.style.height= '0';
        });

        // show the corresponding content
        content.style.height= '100%';
        content.style.opacity = '1';
        //======================================

      });

      this.renderer.listen(govPath, 'mouseover', (j) => {
        this.el.nativeElement.querySelector('#gov-name-label').style.display = 'block';
        this.el.nativeElement.querySelector('#gov-name-label').innerText = this.translate.instant(govPath.id)

      });
      this.renderer.listen(govPath, 'mousemove', (j) => {
        const x = j.clientX;
        const y = j.clientY;
        this.el.nativeElement.querySelector('#gov-name-label').style.top = `${y - 60}px`;
        this.el.nativeElement.querySelector('#gov-name-label').style.left = `${x + 10}px`;
        this.renderer.setStyle(this.el.nativeElement.querySelector('#gov-name-label'), 'opacity', '1');
      });

      this.renderer.listen(govPath, 'mouseleave', (j) => {
        this.el.nativeElement.querySelector('#gov-name-label').style.display = 'none';
      });


    });

 //======================================
 window.addEventListener('scroll', () => {
  this.renderer.setStyle( this.el.nativeElement.querySelector('#gov-name-label'), 'opacity', '0');
});
 let i = 0;
 const interval = setInterval(() => {
  const economicZone_content = this.el.nativeElement.querySelectorAll('.economicZone-content');
  if(economicZone_content.length!=0){
  
  const nId =economicZone_content[i].getAttribute('data-index');
  //this.el.nativeElement.querySelectorAll('[data-index="' + nId + '"]').forEach((e: { dispatchEvent: (arg0: Event) => any; })=>e.dispatchEvent(new Event('click')));

  const path= this.el.nativeElement.querySelector('.government-path[data-index="' + nId + '"]');
  path.dispatchEvent(new Event('click'));


  const targetElementRect = path.getBoundingClientRect();
  const x = targetElementRect.left + targetElementRect.width / 2;
  const y = targetElementRect.top ;
  this.el.nativeElement.querySelector('#gov-name-label').style.top = `${y - 35}px`;
  this.el.nativeElement.querySelector('#gov-name-label').style.left = `${x + 10}px`;
  this.el.nativeElement.querySelector('#gov-name-label').style.display = 'block';
  this.el.nativeElement.querySelector('#gov-name-label').innerText = this.translate.instant(path.id)
  this.renderer.setStyle(this.el.nativeElement.querySelector('#gov-name-label'), 'opacity', '1');


  i++;
  if (i === economicZone_content.length) {
    i=0;
  }
}
}, 4000);

 //======================================



  }
}
