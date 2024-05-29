import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CreatePublicationComponent } from './components/create-publication/create-publication.component';
import { CreateConferencePublicationComponent } from './components/create-publication/create-conference-publication/create-conference-publication.component';
import { ReportPublicationComponent } from './components/report-publication/report-publication.component';
import { FilterPublicationComponent } from './components/filter-publication/filter-publication.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},

  {
    path:'',component:AppComponent,children:[
{path:'home',component:HomeComponent},
{path:'create',component:CreatePublicationComponent},
{path:'journal',component:CreateConferencePublicationComponent},
{path:'conference',component:CreateConferencePublicationComponent},
{path:'report',component:ReportPublicationComponent},
{path:'filter',component:FilterPublicationComponent}
    ]

    },
    
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
