import { Routes } from '@angular/router';
import { ApplicationInformationComponent } from './application-information/application-information.component';
import { ApplicationListComponent } from './application-list/application-list.component';
import { CheckedApplicationListComponent } from './checked-application-list/checked-application-list.component';

// import { DashboardComponent } from './dashboard/dashboard.component';
// import { ManagementAuditComponent } from './management-audit/management-audit.component';
// import { ManagementUserComponent } from './management-user/management-user.component';
// import { ReportComponent } from './report/report.component';
// import { TestComponent } from './test/test.component';

export const AgencyPdrmRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'application-list',
                component: ApplicationListComponent
            },
            {
                path: 'application-information/:id',
                component: ApplicationInformationComponent
            },
            {
                path: 'checked-application-list',
                component: CheckedApplicationListComponent
            },
            

        ]
    }
]