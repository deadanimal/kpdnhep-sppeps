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
import { ApprovingOfficerRoutes } from './approving-officer.routing';


import { ListToApproveComponent } from './list-to-approve/list-to-approve.component';
import { ApproveInformationComponent } from './approve-information/approve-information.component';
import { ApprovedListComponent } from './approved-list/approved-list.component';



@NgModule({
  declarations: [
    ListToApproveComponent,
    ApproveInformationComponent,
    ApprovedListComponent
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
    RouterModule.forChild(ApprovingOfficerRoutes)
  ]
})
export class ApprovingOfficerModule { }
