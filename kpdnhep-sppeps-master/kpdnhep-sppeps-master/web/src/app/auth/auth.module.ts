import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { 
  BsDropdownModule, 
  ProgressbarModule,
  TooltipModule
} from 'ngx-bootstrap';

import { LoadingBarModule } from '@ngx-loading-bar/core';

import { RouterModule } from '@angular/router';
import { AuthRoutes } from './auth.routing';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NewPasswordComponent } from './new-password/new-password.component';

import { TranslateModule } from '@ngx-translate/core';
import { TabsModule } from "ngx-bootstrap/tabs";
import { ModalModule } from "ngx-bootstrap/modal";
import { IcCheckComponent } from './ic-check/ic-check.component';
import { Register2Component } from './register2/register2.component';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [
    LoginComponent,
    ForgotPasswordComponent,
    NewPasswordComponent,
    IcCheckComponent,
    Register2Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    LoadingBarModule,
    RouterModule.forChild(AuthRoutes),
    TranslateModule,
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    NgxSpinnerModule
  ]
})
export class AuthModule { }
