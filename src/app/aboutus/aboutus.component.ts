import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-aboutus',
  imports: [TranslateModule ,NgClass],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.scss'
})
export class AboutusComponent {
 constructor(public translate: TranslateService){}

 changeLanguage(lang: string) {
  this.translate.setDefaultLang(lang);
}
}
