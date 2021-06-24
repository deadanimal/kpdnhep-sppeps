import { Component, OnInit } from '@angular/core';
// import { DataSharingService } from '../../shared/data-sharing.service';
import { W3csService } from "src/app/shared/services/w3cs/w3cs.service";
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'app-header-global',
  templateUrl: './header-global.component.html',
  styleUrls: ['./header-global.component.scss']
})
export class HeaderGlobalComponent implements OnInit {

  date: Date = new Date();
  today: number = Date.now();
  usrname: string
  userType;

  constructor(
    // private dataSharingService: DataSharingService, 
    private w3cService: W3csService,
    private translate: TranslateService,
    private authService:AuthService,
    public router: Router
  ) 
  { 
    // this.services.getUserDetail().subscribe((res) =>{
        
    //     this.usrname = res.nama;
             
    // });
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
  
  public token;

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

    this.token = localStorage.getItem('accessToken');
    this.checkAuth();
  }


  checkAuth(){
    if (this.token !== null){
      this.usrname = 'Pemohon';
    }
  }

  logout(){
    this.token = localStorage.removeItem('accessToken');
    this.authService.logout();
    this.router.navigate([['/global/front-page']]);
  }

}
