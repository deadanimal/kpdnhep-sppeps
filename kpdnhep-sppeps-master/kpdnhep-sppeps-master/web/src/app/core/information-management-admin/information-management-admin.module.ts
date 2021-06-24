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
import { InformationManagementAdminRoutes } from './information-management-admin.routing';
import { AuditTrailsComponent } from './audit-trails/audit-trails.component';
import { UserLogsComponent } from './audit-trails/user-logs/user-logs.component';
import { ApplicantsLogsComponent } from './audit-trails/applicants-logs/applicants-logs.component';



@NgModule({
  declarations: [
    AuditTrailsComponent,
    UserLogsComponent,
    ApplicantsLogsComponent
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
    RouterModule.forChild(InformationManagementAdminRoutes)
  ]
})
export class InformationManagementAdminModule { }
