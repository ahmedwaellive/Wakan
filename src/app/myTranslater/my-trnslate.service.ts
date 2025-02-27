import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Injectable({
  providedIn: 'root'
})
export class MyTrnslateService {

  constructor(private translateService:TranslateService , @Inject(PLATFORM_ID) private id: Object) {
    if(isPlatformBrowser( this.id )){
       //1- set default lang
     this.translateService.setDefaultLang('ar');
     //2- get lang from localStorage
     const savedLang  = localStorage.getItem('lang');
     if(savedLang){
      this.translateService.use(  savedLang  );
    }

     //to change direction
    // this.changeDirection()
    }
 }
   }

