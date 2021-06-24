import { Routes } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { IcCheckComponent } from './ic-check/ic-check.component';
import { LoginComponent } from './login/login.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { Register2Component } from './register2/register2.component';

export const AuthRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'forgot-password',
                component: ForgotPasswordComponent
            },
            {
                path: 'new-password',
                component: NewPasswordComponent
            },
            {
                path: 'ic-check',
                component: IcCheckComponent
            },
            {
                path: 'register2',
                component: Register2Component
            },
        ]
    }
]