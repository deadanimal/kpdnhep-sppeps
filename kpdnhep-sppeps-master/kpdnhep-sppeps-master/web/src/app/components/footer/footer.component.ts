import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from "@angular/core";
import { W3csService } from "src/app/shared/services/w3cs/w3cs.service";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent implements OnInit {
  date: Date = new Date();
  constructor(private translate: TranslateService, private w3cService: W3csService) {}


  fontSize: string;
  themeColor: string;
  fontColor: string;
  
  ngOnInit() {
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
}
