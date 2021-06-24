import { W3csService } from 'src/app/shared/services/w3cs/w3cs.service';
import { TranslateService } from '@ngx-translate/core';
import { DataSharingService } from './../../shared/data-sharing.service';
import { Component, OnInit, Input } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import { Router, Routes } from "@angular/router";
import { AuthService } from "src/app/shared/auth/auth.service";
// import { LoadingBarService } from "@ngx-loading-bar/core";
// import { NotifyService } from "src/app/shared/handler/notify/notify.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input() id: any;
  @Input() password: any;

  // Form
  focusid;
  focusPassword;
  loginForm: FormGroup;
  loginFormMessages = {
    id: [
      { type: "required", message: "please enter valid ID" },
    ],
    password: [
      { type: "required", message: "Password is required" },
      {
        type: "minLength",
        message: "Password must have at least 8 characters",
      },
    ],
  };
  route: Router;

  constructor(
    private dataSharingService: DataSharingService,
    private router: Router,
    private translate: TranslateService,
    private w3cService: W3csService,
    private authService: AuthService,
    private spinner: NgxSpinnerService
  ) { }

  // CSS class
  fontSize: string;
  fontColor: string;

  // User
  userDetails: any

  ngOnInit(): void {

    this.w3cService.currentFontSize.subscribe((fontSize) => {
      this.fontSize = fontSize;
    });

    this.w3cService.currentFontColor.subscribe(
      (fontColor) => (this.fontColor = fontColor),
    );
  }

  go() {
    this.route.navigate(['/core/global/front-page']); // navigate to other page
  }

  onSubmitUser() {
    this.spinner.show();
    this.id = (<HTMLInputElement>document.getElementById('user-id')).value;
    this.password = (<HTMLInputElement>document.getElementById('user-password')).value;
    this.dataSharingService.userType = 0;

    this.authService.login({ id: this.id, password: this.password }).subscribe(
      (res) => {
        // this.successMessage()
        this.authService.getUserDetail().subscribe((reso) => {
          this.userDetails = reso
          this.authService.userRole = 0
          this.spinner.hide();
          this.router.navigate(['/user/user-portal'])
          //this.navigatePage('dashboard-admin')
        }
        )
      }, (err) => {
        this.spinner.hide();
        //console.log(err)
        //this.errorMessage(err.error.error)       
      }
    );

    // if (this.id == "user") {
    //   this.dataSharingService.userType = this.id;
    //   this.router.navigate(['core/user/user-portal'])
    // }
  }

  onSubmitAdmin() {
    this.id = (<HTMLInputElement>document.getElementById('admin-id')).value;
    this.password = (<HTMLInputElement>document.getElementById('admin-password')).value;
    this.spinner.show();

    this.authService.loginOthers({ id: this.id, password: this.password }).subscribe(
      (res) => {
        // this.successMessage()a
        this.authService.getUserDetail().subscribe((reso) => {
          this.spinner.hide();
          this.userDetails = reso
          this.dataSharingService.userType = this.userDetails.level_akses;
          if (this.userDetails.level_akses == 0) {
            this.authService.userRole = 0
            this.router.navigate(['core/user/user-portal'])
            //this.navigatePage('dashboard-admin')
          }
          else if (this.userDetails.level_akses == 1) {
            this.authService.userRole = 1
            this.authService.userType = this.userDetails.kod_peranan;
            if (this.authService.userType.includes('PEL')) {
              this.router.navigate(['/approving-officer/list-to-approve'])
            }
            else if (this.authService.userType.includes('PYK'))
              this.router.navigate(['/supporting-officer/support-application-list'])
            else if (this.authService.userType.includes('PHQ'))
              this.router.navigate(['/hq-processing-officer/hq-application-list'])
            else if (this.authService.userType.includes('PN'))
              this.router.navigate(['/state-processing-officer/state-application-list'])
            // else if (this.authService.userType.includes('MAKL'))
            //   this.router.navigate(['/admin-hq/announcement-administration'])
            //this.navigatePage('dashboard-admin')
          }
          else if (this.userDetails.level_akses == 2) {
            this.authService.userRole = 2
            this.authService.userType = this.userDetails.kod_peranan;
            if (this.authService.userType.includes('MAKL'))
              this.router.navigate(['/admin-hq/announcement-administration'])
            else if (this.authService.userType.includes('PDRM'))
              this.router.navigate(['/agency-pdrm/application-list'])
            else if (this.authService.userType.includes('KPD'))
              this.router.navigate(['/information-management-admin/audit-trails'])
          }

        })
      }, (err) => {
        this.spinner.hide();
        //console.log(err)
        //this.errorMessage(err.error.error)       
      }
    );

    // if (this.id == "pdrm") {
    //   this.dataSharingService.userType = this.id;
    //   this.router.navigate(['core/agency-pdrm/application-list'])
    // }
    // else if ( this.id == "admin hq"){
    //   this.dataSharingService.userType = this.id;
    //   this.router.navigate(['core/admin-hq/archive'])
    // }
    // else if ( this.id == "penyokong"){
    //   this.dataSharingService.userType = this.id;
    //   this.router.navigate(['core/supporting-officer/support-application-list'])
    // }
    // else if ( this.id == "pelulus"){
    //   this.dataSharingService.userType = this.id;
    //   this.router.navigate(['core/approving-officer/list-to-approve'])
    // }
    // else if ( this.id == "pegawai hq"){
    //   this.dataSharingService.userType = this.id;
    //   this.router.navigate(['core/hq-processing-officer/hq-application-list'])
    // }
    // else if ( this.id == "pegawai negeri"){
    //   this.dataSharingService.userType = this.id;
    //   this.router.navigate(['core/state-processing-officer/state-application-list'])
    // }
    // else if ( this.id == "pentadbir pengurusan maklumat"){
    //   this.dataSharingService.userType = this.id;
    //   this.router.navigate(['core/information-management-admin/audit-trails'])
    // }



  }

}
