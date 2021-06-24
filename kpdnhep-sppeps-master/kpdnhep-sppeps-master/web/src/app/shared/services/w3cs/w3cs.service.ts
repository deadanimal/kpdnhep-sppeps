import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class W3csService {
  // Font Size
  private fontSizeDefault = new BehaviorSubject("fs-09rem");
  currentFontSize = this.fontSizeDefault.asObservable();

  // Theme Color
  private themeColorDefault = new BehaviorSubject("theme-default");
  currentThemeColor = this.themeColorDefault.asObservable();

  //font Color
  private fontColorDefault = new BehaviorSubject("font-default");
  currentFontColor = this.fontColorDefault.asObservable();

  // Add To Cart Count
  // private addToCartCount = new BehaviorSubject(0);
  // currentAddToCartCount = this.addToCartCount.asObservable();

  constructor() {}

  changeFontSize(className: string) {
    this.fontSizeDefault.next(className);
  }

  changeThemeColor(className: string) {
    this.themeColorDefault.next(className);
  }

  changeFontColor(className: string) {
    this.fontColorDefault.next(className);
  }
  // changeAddToCartCount(count: number) {
  //   this.addToCartCount.next(count);
  // }
}
