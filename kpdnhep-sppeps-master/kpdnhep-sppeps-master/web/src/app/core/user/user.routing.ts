import { Routes } from '@angular/router';
import { AppealApplicationComponent } from './appeal-application/appeal-application.component';
import { ApplicationStatusComponent } from './application-status/application-status.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DuplicateApplicationComponent } from './duplicate-application/duplicate-application.component';
import { EditAppealApplicationComponent } from './edit-appeal-application/edit-appeal-application.component';
import { EditApplicationComponent } from './edit-application/edit-application.component';
import { EditDuplicateApplicationComponent } from './edit-duplicate-application/edit-duplicate-application.component';
import { EditNewApplicationComponent } from './edit-new-application/edit-new-application.component';
import { EditRenewalApplicationComponent } from './edit-renewal-application/edit-renewal-application.component';
import { NewApplicationComponent } from './new-application/new-application.component';
import { PaymentOnlineComponent } from './payment-online/payment-online.component';
import { PaymentComponent } from './payment/payment.component';
import { RenewalApplicationComponent } from './renewal-application/renewal-application.component';
import { UserPortalComponent } from './user-portal/user-portal.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

export const UserRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'user-portal',
                component: UserPortalComponent
            },
            {
                path: 'new-application',
                component: NewApplicationComponent
            },
            {
                path: 'edit-new-application/:id',
                component: EditNewApplicationComponent
            },
            {
                path: 'duplicate-application',
                component: DuplicateApplicationComponent
            },
            {
                path: 'edit-duplicate-application/:id',
                component: EditDuplicateApplicationComponent
            },
            {
                path: 'renewal-application',
                component: RenewalApplicationComponent
            },
            {
                path: 'edit-renewal-application/:id',
                component: EditRenewalApplicationComponent
            },
            {
                path: 'appeal-application',
                component: AppealApplicationComponent
            },
            {
                path: 'edit-appeal-application/:id',
                component: EditAppealApplicationComponent
            },
            {
                path: 'application-status',
                component: ApplicationStatusComponent
            },
            {
                path: 'payment',
                component: PaymentComponent
            },
            {
                path: 'payment-online',
                component: PaymentOnlineComponent
            },
            {
                path: 'user-profile',
                component: UserProfileComponent
            }
        ]
    }
]