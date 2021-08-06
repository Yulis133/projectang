import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';

import { PageHeaderComponent } from './utils/page-header/page-header.component';
import { ParagraphCapitalPipe } from './pipes/paragraph-capital.pipe';
import { ContactsComponent } from './components/contacts/contacts.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CustomersComponent } from './components/customers/customers.component';
import { HttpTutComponent } from './tut/http-tut/http-tut.component';
import { CustomersNewComponent } from './components/customers-new/customers-new.component';
import { FormsTutComponent } from './tut/forms-tut/forms-tut.component';
import { CustomersDetailsComponent } from './components/customers-details/customers-details.component';
import { CustomersEditComponent } from './components/customers-edit/customers-edit.component';
import { FirestoreTutComponent } from './tut/firestore-tut/firestore-tut.component';
import { FilterArrayOfCustomersPipe } from './pipes/filter-array-of-customers.pipe';
import { AuthComponent } from './tut/auth/auth.component';
import { SignWithGoogleDirective } from './directives/sign-with-google.directive';
import { LogoutDirective } from './directives/logout.directive';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    NavbarComponent,
    PageHeaderComponent,
    ParagraphCapitalPipe,
    ContactsComponent,
    PageNotFoundComponent,
    CustomersComponent,
    HttpTutComponent,
    CustomersNewComponent,
    FormsTutComponent,

    CustomersDetailsComponent,
    CustomersEditComponent,
    FirestoreTutComponent,
    FilterArrayOfCustomersPipe,
    AuthComponent,
    SignWithGoogleDirective,
    LogoutDirective,
    DashboardComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
