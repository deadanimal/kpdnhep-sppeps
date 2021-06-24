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
import { AgencyPdrmRoutes } from './agency-pdrm.routing';
import { ApplicationListComponent } from './application-list/application-list.component';
import { ApplicationInformationComponent } from './application-information/application-information.component';
import { CheckedApplicationListComponent } from './checked-application-list/checked-application-list.component';



@NgModule({
  declarations: [
    ApplicationListComponent,
    ApplicationInformationComponent,
    CheckedApplicationListComponent
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
    RouterModule.forChild(AgencyPdrmRoutes)
  ]
})
export class AgencyPdrmModule { }
