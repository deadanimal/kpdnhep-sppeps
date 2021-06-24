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
import { globalOfficerRoutes } from './global-officer.routing';
import { CheckApplicationStatusComponent } from './check-application-status/check-application-status.component';
import { ApplicationStatusOfficerViewComponent } from './application-status-officer-view/application-status-officer-view.component';
import { ApplicationHistoryReportComponent } from './reports-and-statistics/application-history-report/application-history-report.component';
import { BlacklistedApplicationReportComponent } from './reports-and-statistics/blacklisted-application-report/blacklisted-application-report.component';
import { FiCollectionStatisticsComponent } from './reports-and-statistics/fi-collection-statistics/fi-collection-statistics.component';
import { PermitApprovalPercentageComponent } from './reports-and-statistics/permit-approval-percentage/permit-approval-percentage.component';
import { PermitHolderStatisticsComponent } from './reports-and-statistics/permit-holder-statistics/permit-holder-statistics.component';
import { PermitRejectedPercentageComponent } from './reports-and-statistics/permit-rejected-percentage/permit-rejected-percentage.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';




@NgModule({
  declarations: [
    CheckApplicationStatusComponent,
    ApplicationStatusOfficerViewComponent,
    ApplicationHistoryReportComponent,
    BlacklistedApplicationReportComponent,
    FiCollectionStatisticsComponent,
    PermitApprovalPercentageComponent,
    PermitHolderStatisticsComponent,
    PermitRejectedPercentageComponent,
    AdminProfileComponent
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
    RouterModule.forChild(globalOfficerRoutes)
  ]
})
export class GlobalOfficerModule { }
