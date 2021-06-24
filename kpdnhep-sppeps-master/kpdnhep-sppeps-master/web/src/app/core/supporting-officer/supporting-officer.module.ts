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
import { SupportingOfficerRoutes } from './supporting-officer.routing';
import { SupportApplicationListComponent } from './support-application-list/support-application-list.component';
import { SupportApplicationInformationComponent } from './support-application-information/support-application-information.component';
import { CompletedApplicationListComponent } from './completed-application-list/completed-application-list.component';




@NgModule({
  declarations: [
    SupportApplicationListComponent,
    SupportApplicationInformationComponent,
    CompletedApplicationListComponent
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
    RouterModule.forChild(SupportingOfficerRoutes)
  ]
})
export class SupportingOfficerModule { }
