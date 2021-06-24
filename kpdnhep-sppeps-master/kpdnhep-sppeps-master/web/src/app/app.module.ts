import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { HttpTokenInterceptor } from './shared/interceptor/http.token.interceptor';
import { BsDropdownModule } from 'ngx-bootstrap';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { TagInputModule } from 'ngx-chips';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { GlobalLayoutComponent } from './layouts/global-layout/global-layout.component';
import { PresentationModule } from './examples/presentation/presentation.module';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';

import { TranslateService } from '@ngx-translate/core';
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NouisliderModule } from 'ng2-nouislider';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { W3cComponent } from './components/w3c/w3c.component';
import { HeaderGlobalComponent } from './components/header-global/header-global.component';
import { HeaderComponent } from './components/header/header.component';


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}

export function HttpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "assets/i18n/", ".json");
}

@NgModule({
  imports: [
    NouisliderModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    TagInputModule,
    ToastrModule.forRoot({
      closeButton: true,
      timeOut: 3000,
      progressBar: true,
      positionClass: 'toast-top-right'
    }),
    LeafletModule,
    PresentationModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpTranslateLoader,
        deps: [HttpClient],
      }
      
    }),
    NgxDatatableModule.forRoot({
      messages: {
        emptyMessage: 'No data to display', // Message to show when array is presented, but contains no values
        totalMessage: 'Jumlah', // Footer total message
        selectedMessage: 'selected' // Footer selected message
      }
    }),
  ],
  declarations: [
    AppComponent, 
    AdminLayoutComponent, 
    AuthLayoutComponent, 
    GlobalLayoutComponent,

    NavbarComponent,
    FooterComponent,
    W3cComponent,
    HeaderGlobalComponent,
    HeaderComponent,
  ],
  providers: [
    /* Uncomment this to use interceptor
    {
      provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true
    }
    */
    {
      provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

export class I18nModule {
  constructor(translate: TranslateService) {
    translate.addLangs(['my', 'en']);
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/my|en/) ? browserLang : 'my');
  }
}
