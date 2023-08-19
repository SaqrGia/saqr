import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-news-card',
    templateUrl: './news-card.component.html',
    styleUrls: ['./news-card.component.css'],
    standalone: true,
    imports: [DatePipe, TranslateModule]
})
export class NewsCardComponent {

@Input()
title!:string;
@Input()
content!:string;
@Input()
targetUrl!:string;
@Input()
imageUrl!:string;
@Input()
date!:string;
ngOnInit(){
}
}
