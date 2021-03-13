import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertComponent } from './alert/alert.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AlertService } from './alert/alert.service';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
