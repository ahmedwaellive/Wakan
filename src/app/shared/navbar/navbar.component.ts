import { NgClass } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive,TranslateModule,NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isDropdownOpen = false;
  constructor(private translate: TranslateService ) { }


  @ViewChild('dropdownMenu') dropdownMenu!: ElementRef;
  @ViewChild('menuButton') menuButton!: ElementRef;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (
      this.isDropdownOpen &&
      this.dropdownMenu &&
      !this.dropdownMenu.nativeElement.contains(event.target) &&
      !this.menuButton.nativeElement.contains(event.target)
    ) {
      this.isDropdownOpen = false;
    }
  }


  changelang() {
    const newLang = this.translate.currentLang === 'en' ? 'ar' : 'en';
    this.translate.use(newLang);
    localStorage.setItem('lang', newLang);
  }

}
