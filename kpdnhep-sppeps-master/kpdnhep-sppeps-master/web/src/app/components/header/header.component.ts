import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingService } from './../../shared/data-sharing.service';
import { W3csService } from "src/app/shared/services/w3cs/w3cs.service";
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from './../../shared/auth/auth.service';
import { JwtService } from './../../shared/handler/jwt/jwt.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  date: Date = new Date();
  today: number = Date.now();
  usrname: string
  userType;

  constructor(
    private dataSharingService: DataSharingService, 
    private w3cService: W3csService,
    private translate: TranslateService,
    private services: AuthService,
    private jwtService: JwtService,
    private router: Router,

  ) 
  { 
    this.services.getUserDetail().subscribe((res) =>{
        
        this.usrname = res.nama;
             
    });
    //data sharing
    // dataSharingService.itemValue.subscribe((user:any)=>{
    //   this.userType=user
    //   console.log(user)
    // })

  }

  // CSS class
  fontSize: string;
  themeColor: string;
  fontColor: string;

  ngOnInit(): void {

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

  logout() {
    this.services.logout().subscribe(
      (res) =>{
        this.usrname = "";
        this.jwtService.destroyToken()
        return this.router.navigate(['/auth/login'])
      });
  }

  

}
