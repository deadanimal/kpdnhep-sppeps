import { Routes } from '@angular/router';
import { BlacklistApplicationComponent } from './blacklist-application/blacklist-application.component';
import { CheckedByPdrmComponent } from './checked-by-pdrm/checked-by-pdrm.component';
import { HqApplicationInformationComponent } from './hq-application-information/hq-application-information.component';
import { HqApplicationListComponent } from './hq-application-list/hq-application-list.component';
import { HqCompletedListComponent } from './hq-completed-list/hq-completed-list.component';


export const HqProcessingOfficerRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'blacklist-application',
                component: BlacklistApplicationComponent
            },
            {
                path: 'checked-by-pdrm/:id',
                component: CheckedByPdrmComponent
            },
            {
                path: 'hq-application-list',
                component: HqApplicationListComponent
            },
            {
                path: 'hq-application-information/:id',
                component: HqApplicationInformationComponent
            },
            {
                path: 'hq-completed-list',
                component: HqCompletedListComponent
            },



            // {
            //     path: 'management',
            //     children: [
            //         {
            //             path: 'audit-trails',
            //             component: ManagementAuditComponent
            //         },
            //         {
            //             path: 'user',
            //             component: ManagementUserComponent
            //         },
            //         {
            //             path: 'test',
            //             component: TestComponent
            //         }
            //     ]
            // },
            // {
            //     path: 'report',
            //     component: ReportComponent
            // }
        ]
    }
]