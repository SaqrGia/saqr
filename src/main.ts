/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { HttpLoaderFactory } from './app/app.module';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app/app-routing.module';
import { provideAnimations } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { CacheInterceptor } from './app/interceptors/CacheInterceptor';
import { HTTP_INTERCEPTORS, withInterceptorsFromDi, provideHttpClient, HttpClient } from '@angular/common/http';


bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, CarouselModule, AppRoutingModule, FormsModule, ReactiveFormsModule, NgbCollapseModule, NgxPaginationModule, NgxUiLoaderHttpModule.forRoot({ showForeground: true }), TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }), NgxUiLoaderModule.forRoot({ "bgsColor": "#0069b3",
            "bgsOpacity": 1,
            "bgsPosition": "bottom-right",
            "bgsSize": 60,
            "bgsType": "ball-spin-clockwise",
            "fgsType": "cube-grid",
            "blur": 50,
            "delay": 0,
            "fastFadeOut": true,
            "fgsColor": "var(--primary-color)",
            "fgsPosition": "center-center",
            "fgsSize": 60,
            "overlayColor": "rgb(255,255,255)",
            "hasProgressBar": false,
        })),
        { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true },
        provideAnimations(),
        provideHttpClient(withInterceptorsFromDi())
    ]
})
  .catch(err => console.error(err));
