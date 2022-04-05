import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobslistComponent } from './jobslist/jobslist.component';
import { NewjobComponent } from './newjob/newjob.component';
import { UploadcvComponent } from './uploadcv/uploadcv.component';

const routes: Routes = [

  
  {path:'joblist', component: JobslistComponent},
  {path:'uploadcv', component: UploadcvComponent},
  {path:'newjob', component: NewjobComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
