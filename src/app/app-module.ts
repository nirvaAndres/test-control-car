import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Home } from './sections/home/home';
import { NavBar } from './components/nav-bar/nav-bar';
import { Banner } from './components/banner/banner';
import { MechanicalWorkshopModule } from './components/mechanical-workshop/mechanical-workshop-module';
import { Quotes } from './sections/quotes/quotes';
import { Workshop } from './sections/workshop/workshop';
import { Assessment } from './sections/assessment/assessment';
import { Assignment } from './sections/assignment/assignment';
import { Atc } from './sections/atc/atc';

@NgModule({
  declarations: [
    App,
    Home,
    NavBar,
    Banner,
    Quotes,
    Workshop,
    Assessment,
    Assignment,
    Atc
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MechanicalWorkshopModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})

export class AppModule { }
