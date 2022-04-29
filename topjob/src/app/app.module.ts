import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobslistComponent } from './jobslist/jobslist.component';
import { UploadcvComponent } from './uploadcv/uploadcv.component';
import { NewjobComponent } from './newjob/newjob.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryDataService } from './in-memory-data.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { JobdetailComponent } from './jobdetail/jobdetail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    JobslistComponent,
    UploadcvComponent,
    NewjobComponent,
    NavbarComponent,
    PageNotFoundComponent,
    JobdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
