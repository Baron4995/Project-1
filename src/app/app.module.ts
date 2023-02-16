import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {LoadJsService} from "./load-js.service";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientRegistrationComponent } from './client-registration/client-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    ScheduleComponent,
    HomeComponent,
    ClientRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [
    LoadJsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
