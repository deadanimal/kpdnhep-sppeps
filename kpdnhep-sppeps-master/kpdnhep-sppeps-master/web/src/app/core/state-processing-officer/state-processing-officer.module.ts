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
import { StateProcessingOfficerRoutes } from './state-processing-officer.routing';
import { ApplicationFeeComponent } from './application-fee/application-fee.component';
import { ApprovedInformationComponent } from './approved-information/approved-information.component';
import { StateApplicationInformationComponent } from './state-application-information/state-application-information.component';
import { StateApplicationListComponent } from './state-application-list/state-application-list.component';
import { StateCompletedListComponent } from './state-completed-list/state-completed-list.component';



@NgModule({
  declarations: [
    ApplicationFeeComponent,
    ApprovedInformationComponent,
    StateApplicationInformationComponent,
    StateApplicationListComponent,
    StateCompletedListComponent
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
    RouterModule.forChild(StateProcessingOfficerRoutes)
  ]
})
export class StateProcessingOfficerModule { }
