import { TranslateService } from '@ngx-translate/core';
// import { DataSharingService } from './../../shared/data-sharing.service';
import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { W3csService } from "src/app/shared/services/w3cs/w3cs.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {

date: Date = new Date();
  today: number = Date.now();

  user;
  userType=0;

  isCollapsed = true;
  
  // Switch
  switch = true;
  onText = "BM";
  offText = "EN";
  onColor = "danger";
  offColor = "primary";

  // Language
  languageSwitcher: string = "my";

  constructor(
    private router: Router, 
    // private dataSharingService: DataSharingService, 
    private translate: TranslateService,
    private w3cService: W3csService
    ) {

    // translate.setDefaultLang('en');
    translate.use('my');

    router.events.subscribe(val => {
      this.isCollapsed = true;
    });

  
  }

  // CSS class
  fontSize: string;
  themeColor: string;
  fontColor: string;

  ngOnInit() {
    // this.lang = localStorage.getItem('lang') || 'ms';
    this.w3cService.currentFontSize.subscribe((fontSize) => {
      this.fontSize = fontSize;
    });

    this.w3cService.currentThemeColor.subscribe(
      (themeColor) => (this.themeColor = themeColor)
    );

    this.w3cService.currentFontColor.subscribe(
      (fontColor) => (this.fontColor = fontColor),
    );
  }

  changeLanguageSwitcher(language: string) {
    this.languageSwitcher = language;
    this.translate.setDefaultLang(language);
    this.translate.use(language);
  }
}

