import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isDropdownOpen = false;

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
}
