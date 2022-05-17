import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobdetailComponent } from './jobdetail/jobdetail.component';
import { JobslistComponent } from './jobslist/jobslist.component';
import { NewjobComponent } from './newjob/newjob.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UploadcvComponent } from './uploadcv/uploadcv.component';

const routes: Routes = [

  
  {path:'joblist', component: JobslistComponent},
  {path:'uploadcv', component: UploadcvComponent},
  {path:'newjob', component: NewjobComponent},
  {path:'job/:id', component: JobslistComponent,
      // children:
      // [
      //   {path:'description', component: JobdetailComponent}
      // ]
        },
   {path:'job/:id/description', component: JobdetailComponent},
  {path:'', redirectTo:'joblist',  pathMatch:'full'},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forChild(routes)], //--->To make routes available in the whole application
    
  exports: [RouterModule]
})
export class AppRoutingModule { }
