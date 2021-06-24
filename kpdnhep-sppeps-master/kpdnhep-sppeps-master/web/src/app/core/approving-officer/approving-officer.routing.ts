import { Routes } from '@angular/router';
import { ApproveInformationComponent } from './approve-information/approve-information.component';
import { ApprovedListComponent } from './approved-list/approved-list.component';
import { ListToApproveComponent } from './list-to-approve/list-to-approve.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { ManagementAuditComponent } from './management-audit/management-audit.component';
// import { ManagementUserComponent } from './management-user/management-user.component';
// import { ReportComponent } from './report/report.component';
// import { TestComponent } from './test/test.component';

export const ApprovingOfficerRoutes: Routes = [
    {
        path: '',
        children: [
            
            {
                path: 'list-to-approve',
                component: ListToApproveComponent
            },
            {
                path: 'approve-information/:id',
                component: ApproveInformationComponent
            },
            {
                path: 'approved-list',
                component: ApprovedListComponent
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