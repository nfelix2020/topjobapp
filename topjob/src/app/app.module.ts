import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobslistComponent } from './jobslist/jobslist.component';
import { UploadcvComponent } from './uploadcv/uploadcv.component';
import { NewjobComponent } from './newjob/newjob.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    JobslistComponent,
    UploadcvComponent,
    NewjobComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
