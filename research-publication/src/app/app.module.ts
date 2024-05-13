import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CreateResearchComponent } from './components/create-research/create-research.component';
import { ViewResearchComponent } from './components/view-research/view-research.component';
import { EditResearchComponent } from './components/edit-research/edit-research.component';
import { DeleteResearchComponent } from './components/delete-research/delete-research.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { CommonNavModule } from 'src/app/common/common-nav.module';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { PrintResearchComponent } from './components/print-research/print-research.component';
import { PublicationComponent } from './components/publication/publication.component';
import { JournalComponent } from './components/journal/journal.component';
import { ConferenceComponent } from './components/conference/conference.component';
// @NgModule({  declarations: []
// })
// export class ResearchPublicationSharedModule { 

//   static forRoot(): ModuleWithProviders<any> {
//     return { 
//       ngModule: AppModule,
//       providers: []
//     }
//   }
// }
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateResearchComponent,
    ViewResearchComponent,
    EditResearchComponent,
    DeleteResearchComponent,
    PrintResearchComponent,
    PublicationComponent,
    JournalComponent,
    ConferenceComponent,
  ],
  imports: [
    // BrowserModule,
    AppRoutingModule,
    CommonModule,
    CommonNavModule,
    // HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    NgSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class ResearchPublicationModule { }
