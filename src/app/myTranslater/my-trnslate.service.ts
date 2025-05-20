import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyTrnslateService {
  private currentLangSubject = new BehaviorSubject<string>('ar');
  currentLang$: Observable<string> = this.currentLangSubject.asObservable();

  constructor(
    private translateService: TranslateService,
    @Inject(PLATFORM_ID) private id: any
  ) {
    if (isPlatformBrowser(this.id)) {
      this.translateService.setDefaultLang('ar');
      const savedLang = localStorage.getItem('lang');
      if (savedLang) {
        this.setLanguage(savedLang);
      } else {
        this.setLanguage('ar');
      }
    }
  }

  setLanguage(lang: string) {
    this.translateService.use(lang);
    this.currentLangSubject.next(lang);
    if (isPlatformBrowser(this.id)) {
      localStorage.setItem('lang', lang);
      
    }
  }

  isRtl(): boolean {
    return this.currentLangSubject.value === 'ar';
  }
}
