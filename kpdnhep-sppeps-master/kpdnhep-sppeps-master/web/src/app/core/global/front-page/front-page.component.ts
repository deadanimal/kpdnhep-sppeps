import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { W3csService } from "src/app/shared/services/w3cs/w3cs.service";

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.scss']
})
export class FrontPageComponent implements OnInit {

  //css class
  fontSize: string;
  themeColor: string;
  fontColor: string;

  constructor( private w3cService: W3csService, private translate: TranslateService) {
    translate.use('my');
   }

  ngOnInit(): void {
    this.w3cService.currentFontSize.subscribe((fontSize) => {
      this.fontSize = fontSize;

    });

    this.w3cService.currentThemeColor.subscribe(
      (themeColor) => (this.themeColor = themeColor)
    );

    this.w3cService.currentFontColor.subscribe(
      (fontColor) => (this.fontColor = fontColor)
    );
  }

}
