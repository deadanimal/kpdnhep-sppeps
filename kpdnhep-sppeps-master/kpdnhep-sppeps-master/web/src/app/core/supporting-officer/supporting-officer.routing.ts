import { Routes } from '@angular/router';
import { CompletedApplicationListComponent } from './completed-application-list/completed-application-list.component';
import { SupportApplicationInformationComponent } from './support-application-information/support-application-information.component';
import { SupportApplicationListComponent } from './support-application-list/support-application-list.component';


export const SupportingOfficerRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'support-application-list',
                component: SupportApplicationListComponent
            },
            {
                path: 'support-application-information/:id',
                component: SupportApplicationInformationComponent
            },
            {
                path: 'completed-application-list',
                component: CompletedApplicationListComponent
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