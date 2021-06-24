import { Routes } from '@angular/router';
import { PermitApprovalPercentageComponent } from '../global-officer/reports-and-statistics/permit-approval-percentage/permit-approval-percentage.component';
// import { ApproveInformationComponent } from '../approving-officer/approve-information/approve-information.component';
import { ApplicationFeeComponent } from './application-fee/application-fee.component';
import { ApprovedInformationComponent } from './approved-information/approved-information.component';
import { RevisedApplicationComponent } from './revised-application/revised-application.component';
import { StateApplicationInformationComponent } from './state-application-information/state-application-information.component';
import { StateApplicationListComponent } from './state-application-list/state-application-list.component';
import { StateCompletedListComponent } from './state-completed-list/state-completed-list.component';


export const StateProcessingOfficerRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'application-fee',
                component: ApplicationFeeComponent
            },
            {
                path: 'approved-information',
                component: ApprovedInformationComponent
            },
            {
                path: 'state-application-information/:id',
                component: StateApplicationInformationComponent
            },
            {
                path: 'state-application-list',
                component: StateApplicationListComponent
            },
            {
                path: 'state-completed-list',
                component: StateCompletedListComponent
            },
            {
                path: '../global-officer/permit-approval-percentage',
                component: PermitApprovalPercentageComponent
            },
            {
                path: 'revised-application/:id',
                component: RevisedApplicationComponent
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