import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmigrantComponent } from './emigrant/emigrant.component';
import { POEComponent } from './poe/poe.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { EmigrantListComponent } from './emigrant-list/emigrant-list.component';
import { RegistrationStatusComponent } from './registration-status/registration-status.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmigrantComponent,
    POEComponent,
    NavbarComponent,
    HeaderComponent,
    EmigrantListComponent,
    RegistrationStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
