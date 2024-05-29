import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcademicAdminHomeComponent } from './_component/academic-admin-home/academic-admin-home.component';
import { AcademicAdminParentComponent } from './_component/academic-admin-parent/academic-admin-parent.component';
import { MoveStudentsComponent } from './_component/move-students/move-students.component';

const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'},
  { path: '', component: AcademicAdminParentComponent ,children:[
    { path: 'home', component: AcademicAdminHomeComponent },
     { path: 'moveStudents', component: MoveStudentsComponent },
  
  ],
  },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
