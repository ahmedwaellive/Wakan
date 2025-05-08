import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-services',
  imports: [CommonModule,TranslateModule ,NgClass],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  constructor(public translate: TranslateService){}
  changeLanguage(lang: string) {
    this.translate.setDefaultLang(lang);
  }
  
}
