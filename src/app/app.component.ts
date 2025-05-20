import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { FlowbiteService } from './shared/flowbite/flowbite.service';
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { ViewportScroller } from '@angular/common';
import { MyTrnslateService } from './myTranslater/my-trnslate.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'wakan';
  constructor(private flowbiteService: FlowbiteService ,private router: Router, private viewportScroller: ViewportScroller ,private myTranslateService: MyTrnslateService) {}

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite(flowbite => {
      // Your custom code here
      console.log('Flowbite loaded', flowbite);
    });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.viewportScroller.scrollToPosition([0, 0]);
      }
    });




        this.myTranslateService.currentLang$.subscribe(lang => {
      const dir = lang === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.setAttribute('lang', lang);
    });

  }
  }



