import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  AccordionModule,
  BsDropdownModule,
  ModalModule,
  ProgressbarModule, 
  TabsModule,
  TooltipModule
} from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { LoadingBarModule } from '@ngx-loading-bar/core';

import { RouterModule } from '@angular/router';
import { UserRoutes } from './user.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserPortalComponent } from './user-portal/user-portal.component';
import { AppealApplicationComponent } from './appeal-application/appeal-application.component';
import { ApplicationStatusComponent } from './application-status/application-status.component';
import { DuplicateApplicationComponent } from './duplicate-application/duplicate-application.component';
import { NewApplicationComponent } from './new-application/new-application.component';
import { PaymentOnlineComponent } from './payment-online/payment-online.component';
import { PaymentComponent } from './payment/payment.component';
import { RenewalApplicationComponent } from './renewal-application/renewal-application.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EditRenewalApplicationComponent } from './edit-renewal-application/edit-renewal-application.component';
import { EditAppealApplicationComponent } from './edit-appeal-application/edit-appeal-application.component';
import { EditDuplicateApplicationComponent } from './edit-duplicate-application/edit-duplicate-application.component';
import { EditNewApplicationComponent } from './edit-new-application/edit-new-application.component';
import { SupportApplicationListComponent } from '../supporting-officer/support-application-list/support-application-list.component';
import { SupportApplicationInformationComponent } from '../supporting-officer/support-application-information/support-application-information.component';

@NgModule({
  declarations: [
    DashboardComponent,
    UserPortalComponent,
    NewApplicationComponent,
    DuplicateApplicationComponent,
    AppealApplicationComponent,
    RenewalApplicationComponent,
    EditRenewalApplicationComponent,
    EditAppealApplicationComponent,
    EditDuplicateApplicationComponent,
    EditNewApplicationComponent,
    ApplicationStatusComponent,
    PaymentComponent,
    PaymentOnlineComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    AccordionModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    ProgressbarModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    LoadingBarModule,
    NgxDatatableModule,
    RouterModule.forChild(UserRoutes)
  ]
})
export class UserModule { }
