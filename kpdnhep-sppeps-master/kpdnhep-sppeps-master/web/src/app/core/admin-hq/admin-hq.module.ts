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
import { AdminHqRoutes } from './admin-hq.routing';


import { AnnouncementAdministrationComponent } from './announcement-administration/announcement-administration.component';
import { ArchiveDocumentComponent } from './archive/archive-document/archive-document.component';
import { ArchiveDocumentListComponent } from './archive/archive-document-list/archive-document-list.component';
import { ArchivePictorialComponent } from './archive/archive-pictorial/archive-pictorial.component';
import { BannerAdministrationComponent } from './banner-administration/banner-administration.component';
import { FaqAdministrationComponent } from './faq-administration/faq-administration.component';
import { OfficerRoleComponent } from './officer-role/officer-role.component';
import { UpdateApplicationComponent } from './update-application/update-application.component';
import { ArchivePictorialListComponent } from './archive/archive-pictorial-list/archive-pictorial-list.component';
import { QuillModule } from 'ngx-quill';



@NgModule({
  declarations: [
    AnnouncementAdministrationComponent,
    ArchiveDocumentComponent,
    ArchiveDocumentListComponent,
    ArchivePictorialComponent,
    ArchivePictorialListComponent,
    ArchiveDocumentListComponent,
    BannerAdministrationComponent,
    FaqAdministrationComponent,
    OfficerRoleComponent,
    UpdateApplicationComponent
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
    RouterModule.forChild(AdminHqRoutes),
    // Quill
    QuillModule.forRoot()
  ]
})
export class AdminHqModule { }
