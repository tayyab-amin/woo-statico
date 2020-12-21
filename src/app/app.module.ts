import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormBuilder, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from 'src/environments/environment';
import { from } from 'rxjs';

registerLocaleData(en);

var firebaseConfig = {
  apiKey: 'AIzaSyCTgN7ir_r64lPUdHCg2AMN8wfEbmaGWEI',
  authDomain: 'ionic-d1ccc.firebaseapp.com',
  databaseURL: 'https://ionic-d1ccc.firebaseio.com',
  projectId: 'ionic-d1ccc',
  storageBucket: 'ionic-d1ccc.appspot.com',
  messagingSenderId: '360006124638',
  appId: '1:360006124638:web:65499d7f97e74b14c5a0cf',
  measurementId: 'G-J7YV6FTQWZ',
};

@NgModule({
  declarations: [
    AppComponent,
    ForgetPasswordComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
  ],
  imports: [
    TabsModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    // FormBuilder,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
