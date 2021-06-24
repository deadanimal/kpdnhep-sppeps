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
import { HqProcessingOfficerRoutes } from './hq-processing-officer.routing';

import { BlacklistApplicationComponent } from './blacklist-application/blacklist-application.component';
import { CheckedByPdrmComponent } from './checked-by-pdrm/checked-by-pdrm.component';
import { HqApplicationListComponent } from './hq-application-list/hq-application-list.component';
import { HqApplicationInformationComponent } from './hq-application-information/hq-application-information.component';
import { HqCompletedListComponent } from './hq-completed-list/hq-completed-list.component';



@NgModule({
  declarations: [
    BlacklistApplicationComponent,
    CheckedByPdrmComponent,
    HqApplicationListComponent,
    HqApplicationInformationComponent,
    HqCompletedListComponent
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
    RouterModule.forChild(HqProcessingOfficerRoutes)
  ]
})
export class HqProcessingOfficerModule { }
