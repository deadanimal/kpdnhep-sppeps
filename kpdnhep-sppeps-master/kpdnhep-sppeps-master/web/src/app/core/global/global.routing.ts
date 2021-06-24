import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { EpsStatusCheckComponent } from './eps-status-check/eps-status-check.component';
import { DocumentArchiveComponent } from './archive/document-archive/document-archive.component';
import { DocumentArchiveListComponent } from './archive/document-archive-list/document-archive-list.component';
import { FaqComponent } from './faq/faq.component';
import { PictorialArchiveComponent } from './archive/pictorial-archive/pictorial-archive.component';
import { PictorialArchiveListComponent } from './archive/pictorial-archive-list/pictorial-archive-list.component';
import { PictorialArchiveContentComponent } from './archive/pictorial-archive-content/pictorial-archive-content.component';

export const GlobalRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'notifications',
                component: NotificationsComponent
            },
            {
                path: 'profile',
                component: ProfileComponent
            },
            {
                path: 'settings',
                component: SettingsComponent
            },
            {
                path: 'front-page',
                component: FrontPageComponent
            },
            {
                path: 'eps-status-check',
                component: EpsStatusCheckComponent
            },
            {
                path: 'document-archive',
                component: DocumentArchiveComponent
            },
            {
                path: 'document-archive-list',
                component: DocumentArchiveListComponent
            },
            {
                path: 'pictorial-archive',
                component: PictorialArchiveComponent
            },
            {
                path: 'pictorial-archive-list',
                component: PictorialArchiveListComponent
            },
            {
                path: 'pictorial-archive-content',
                component: PictorialArchiveContentComponent
            },
            {
                path: 'faq',
                component: FaqComponent
            }
        ]
    }
]