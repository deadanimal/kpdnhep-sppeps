import { Routes } from '@angular/router';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { ApplicationStatusOfficerViewComponent } from './application-status-officer-view/application-status-officer-view.component';
import { CheckApplicationStatusComponent } from './check-application-status/check-application-status.component';
import { ApplicationHistoryReportComponent } from './reports-and-statistics/application-history-report/application-history-report.component';
import { BlacklistedApplicationReportComponent } from './reports-and-statistics/blacklisted-application-report/blacklisted-application-report.component';
import { FiCollectionStatisticsComponent } from './reports-and-statistics/fi-collection-statistics/fi-collection-statistics.component';
import { PermitApprovalPercentageComponent } from './reports-and-statistics/permit-approval-percentage/permit-approval-percentage.component';
import { PermitHolderStatisticsComponent } from './reports-and-statistics/permit-holder-statistics/permit-holder-statistics.component';
import { PermitRejectedPercentageComponent } from './reports-and-statistics/permit-rejected-percentage/permit-rejected-percentage.component';

// import { DashboardComponent } from './dashboard/dashboard.component';
// import { ManagementAuditComponent } from './management-audit/management-audit.component';
// import { ManagementUserComponent } from './management-user/management-user.component';
// import { ReportComponent } from './report/report.component';
// import { TestComponent } from './test/test.component';

export const globalOfficerRoutes: Routes = [
    {
        path: '',
        children: [
            
            {
                path: 'check-application-status',
                component: CheckApplicationStatusComponent
            },
            {
                path: 'application-status-officer-view',
                component: ApplicationStatusOfficerViewComponent
            },
            {
                path: 'application-history-report',
                component: ApplicationHistoryReportComponent
            },
            {
                path: 'blacklisted-application-report',
                component: BlacklistedApplicationReportComponent
            },
            {
                path: 'fi-collection-statistics',
                component: FiCollectionStatisticsComponent
            },
            {
                path: 'permit-approval-percentage',
                component: PermitApprovalPercentageComponent
            },
            {
                path: 'permit-holder-statistics',
                component: PermitHolderStatisticsComponent
            },
            {
                path: 'permit-rejected-percentage',
                component: PermitRejectedPercentageComponent
            },
            {
                path: 'admin-profile',
                component: AdminProfileComponent
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