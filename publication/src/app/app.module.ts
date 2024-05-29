import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CreatePublicationComponent } from './components/create-publication/create-publication.component';
import { FilterPublicationComponent } from './components/filter-publication/filter-publication.component';
import { ReportPublicationComponent } from './components/report-publication/report-publication.component';
import { CreateJournalPublicationComponent } from './components/create-publication/create-journal-publication/create-journal-publication.component';
import { CreateConferencePublicationComponent } from './components/create-publication/create-conference-publication/create-conference-publication.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreatePublicationComponent,
    FilterPublicationComponent,
    ReportPublicationComponent,
    CreateJournalPublicationComponent,
    CreateConferencePublicationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //RouterModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
