import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateResearchComponent } from './components/create-research/create-research.component';
import { DeleteResearchComponent } from './components/delete-research/delete-research.component';
import { EditResearchComponent } from './components/edit-research/edit-research.component';
import { HomeComponent } from './components/home/home.component';
import { PrintResearchComponent } from './components/print-research/print-research.component';
import { ViewResearchComponent } from './components/view-research/view-research.component';
import { PublicationComponent } from './components/publication/publication.component';
import { JournalComponent } from './components/journal/journal.component';
import { ConferenceComponent } from './components/conference/conference.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'client/printResearch/:id',component:PrintResearchComponent},

  {
    path:'',component:AppComponent,children:[
{path:'home',component:HomeComponent},
{path:'create',component:CreateResearchComponent},
{path:'view/:id',component:ViewResearchComponent},
{path:'edit/:data',component:EditResearchComponent},
{path:'delete/:data',component:DeleteResearchComponent},
{path:'publication',component:PublicationComponent},
{path:'journal',component:JournalComponent},
{path:'conference',component:ConferenceComponent},
    ]
    
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
