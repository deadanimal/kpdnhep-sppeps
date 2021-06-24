import { Routes } from '@angular/router';
import { ApplicantsLogsComponent } from './audit-trails/applicants-logs/applicants-logs.component';
import { AuditTrailsComponent } from './audit-trails/audit-trails.component';
import { UserLogsComponent } from './audit-trails/user-logs/user-logs.component';

export const InformationManagementAdminRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'audit-trails',
                component: AuditTrailsComponent
            },
            {
                path: 'user-logs',
                component: UserLogsComponent
            },
            {
                path: 'applicants-logs',
                component: ApplicantsLogsComponent
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