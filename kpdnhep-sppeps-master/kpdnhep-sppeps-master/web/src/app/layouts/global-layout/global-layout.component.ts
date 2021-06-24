import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { localeOptionHash } from 'fullcalendar/src/locale';

@Component({
  selector: 'app-global-layout',
  templateUrl: './global-layout.component.html',
  styleUrls: ['./global-layout.component.scss']
})
export class GlobalLayoutComponent implements OnInit {

  isMobileResolution: boolean;

  constructor(public router: Router) {
    // if (window.innerWidth < 1200) {
    //   this.isMobileResolution = true;
    // } else {
    //   this.isMobileResolution = false;
    // }
  }
  // @HostListener("window:resize", ["$event"])
  // isMobile(event) {
  //   if (window.innerWidth < 1200) {
  //     this.isMobileResolution = true;
  //   } else {
  //     this.isMobileResolution = false;
  //   }
  // }
  public token;
  public reload;

  ngOnInit() {
    this.token = localStorage.getItem('accessToken');

    if (this.token !== null ){

      
        this.router.navigate(['/user/user-portal'])
    }else{
      this.router.navigate(['/global/front-page'])
    }
  }

  checkReload(){
      localStorage.setItem('reload', 'true');
      window.location.reload();
      this.reload = localStorage.getItem('reload');
  }

}
