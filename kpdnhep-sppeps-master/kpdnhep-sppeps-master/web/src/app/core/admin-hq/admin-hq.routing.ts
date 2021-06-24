import { Routes } from '@angular/router';
import { AnnouncementAdministrationComponent } from './announcement-administration/announcement-administration.component';
import { ArchiveDocumentListComponent } from './archive/archive-document-list/archive-document-list.component';
import { ArchiveDocumentComponent } from './archive/archive-document/archive-document.component';
import { ArchivePictorialListComponent } from './archive/archive-pictorial-list/archive-pictorial-list.component';
import { ArchivePictorialComponent } from './archive/archive-pictorial/archive-pictorial.component';
import { BannerAdministrationComponent } from './banner-administration/banner-administration.component';
import { FaqAdministrationComponent } from './faq-administration/faq-administration.component';
import { OfficerRoleComponent } from './officer-role/officer-role.component';
import { UpdateApplicationComponent } from './update-application/update-application.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { ManagementAuditComponent } from './management-audit/management-audit.component';
// import { ManagementUserComponent } from './management-user/management-user.component';
// import { ReportComponent } from './report/report.component';
// import { TestComponent } from './test/test.component';

export const AdminHqRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'announcement-administration',
                component: AnnouncementAdministrationComponent
            },
            {
                path: 'archive-document',
                component: ArchiveDocumentComponent
            },
            {
                path: 'archive-document-list',
                component: ArchiveDocumentListComponent
            },
            {
                path: 'archive-pictorial',
                component: ArchivePictorialComponent
            },
            {
                path: 'archive-pictorial-list',
                component: ArchivePictorialListComponent
            },
            {
                path: 'banner-administration',
                component: BannerAdministrationComponent
            },
            {
                path: 'faq-administration',
                component: FaqAdministrationComponent
            },
            {
                path: 'officer-role',
                component: OfficerRoleComponent
            },
            {
                path: 'update-application',
                component: UpdateApplicationComponent
            },

        ]
    }
]