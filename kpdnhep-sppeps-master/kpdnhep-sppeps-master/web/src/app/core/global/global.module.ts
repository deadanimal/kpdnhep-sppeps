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
import { GlobalRoutes } from './global.routing';
import { NotificationsComponent } from './notifications/notifications.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { HttpClient, HttpClientJsonpModule, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { TranslateService } from '@ngx-translate/core';
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { EpsStatusCheckComponent } from './eps-status-check/eps-status-check.component';
import { DocumentArchiveComponent } from './archive/document-archive/document-archive.component';
import { DocumentArchiveListComponent } from './archive/document-archive-list/document-archive-list.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { FaqComponent } from './faq/faq.component';
import { PictorialArchiveComponent } from './archive/pictorial-archive/pictorial-archive.component';
import { PictorialArchiveListComponent } from './archive/pictorial-archive-list/pictorial-archive-list.component';
import { PictorialArchiveContentComponent } from './archive/pictorial-archive-content/pictorial-archive-content.component';

// export function createTranslateLoader(http: HttpClient) {
//   return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
// }


@NgModule({
  declarations: [
    NotificationsComponent,
    ProfileComponent,
    SettingsComponent,
    FrontPageComponent,
    EpsStatusCheckComponent,
    DocumentArchiveComponent,
    DocumentArchiveListComponent,
    FaqComponent,
    PictorialArchiveComponent,
    PictorialArchiveListComponent,
    PictorialArchiveContentComponent
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
    RouterModule.forChild(GlobalRoutes),
    TranslateModule,
    NgxDatatableModule,
    CarouselModule.forRoot()
  ]
})
export class GlobalModule { }

