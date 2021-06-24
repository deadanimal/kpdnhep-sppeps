import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { GlobalLayoutComponent } from './layouts/global-layout/global-layout.component'
import { PresentationComponent } from './examples/presentation/presentation.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'global/front-page',
    pathMatch: 'full'
  },
  // {
  //   path: '',
  //   redirectTo: 'auth/login',
  //   pathMatch: 'full'
  // },
  {
    path: 'presentation',
    component: PresentationComponent
  },
  {
    path:'',
    component: GlobalLayoutComponent,
    children: [
      {
        path: 'global',
        loadChildren: './core/global/global.module#GlobalModule'
      },
      {
        path: 'user',
        loadChildren: './core/user/user.module#UserModule'
      },
      {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule'
      },
    ]
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'admin',
        loadChildren: './core/admin/admin.module#AdminModule'
      },
      {
        path: 'approving-officer',
        loadChildren: './core/approving-officer/approving-officer.module#ApprovingOfficerModule'
      },
      {
        path: 'supporting-officer',
        loadChildren: './core/supporting-officer/supporting-officer.module#SupportingOfficerModule'
      },
      {
        path: 'admin-hq',
        loadChildren: './core/admin-hq/admin-hq.module#AdminHqModule'
      },
      {
        path: 'agency-pdrm',
        loadChildren: './core/agency-pdrm/agency-pdrm.module#AgencyPdrmModule'
      },
      {
        path: 'hq-processing-officer',
        loadChildren: './core/hq-processing-officer/hq-processing-officer.module#HqProcessingOfficerModule'
      },
      {
        path: 'state-processing-officer',
        loadChildren: './core/state-processing-officer/state-processing-officer.module#StateProcessingOfficerModule'
      },
      {
        path: 'information-management-admin',
        loadChildren: './core/information-management-admin/information-management-admin.module#InformationManagementAdminModule'
      },
      {
        path: 'global-officer',
        loadChildren: './core/global-officer/global-officer.module#GlobalOfficerModule'
      },

      // Example
      {
        path: 'dashboards',
        loadChildren: './examples/dashboards/dashboards.module#DashboardsModule'
      },
      {
        path: 'components',
        loadChildren: './examples/components/components.module#ComponentsModule'
      },
      {
        path: 'forms',
        loadChildren: './examples/forms/forms.module#FormsModules'
      },
      {
        path: 'tables',
        loadChildren: './examples/tables/tables.module#TablesModule'
      },
      {
        path: 'maps',
        loadChildren: './examples/maps/maps.module#MapsModule'
      },
      {
        path: 'widgets',
        loadChildren: './examples/widgets/widgets.module#WidgetsModule'
      },
      {
        path: 'charts',
        loadChildren: './examples/charts/charts.module#ChartsModule'
      },
      {
        path: 'calendar',
        loadChildren: './examples/calendar/calendar.module#CalendarModule'
      },
      {
        path: 'examples',
        loadChildren: './examples/examples/examples.module#ExamplesModule'
      }
    ]
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      
      {
        path: 'examples',
        loadChildren: './layouts/auth-layout/auth-layout.module#AuthLayoutModule'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
