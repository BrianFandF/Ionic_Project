import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat'
import { environment } from 'src/environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getDatabase, provideDatabase } from '@angular/fire/database';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ReactiveFormsModule,
  AngularFireModule.initializeApp(environment.firebase),
  //provideFirebaseApp(() => initializeApp(environment.firebase)),
  provideFirebaseApp(() => initializeApp({"projectId":"lab10-de206","appId":"1:655948033035:web:e2f04de93f71157228ab0e","databaseURL":"https://lab10-de206-default-rtdb.firebaseio.com","storageBucket":"lab10-de206.appspot.com","apiKey":"AIzaSyAx1P3342AzqoMzZ1RDowGGXtxBEP99L0Y","authDomain":"lab10-de206.firebaseapp.com","messagingSenderId":"655948033035"})),
  provideDatabase(() => getDatabase())],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
