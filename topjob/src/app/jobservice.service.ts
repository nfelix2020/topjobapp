import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from './Job';

@Injectable({
  providedIn: 'root'
})
export class JobserviceService {

  private jobsUrl = 'api/jobs/';

  constructor(private http: HttpClient) { }

  getallJobs():Observable<Job[]>{
    return this.http.get<Job[]>(`${this.jobsUrl}`);
  }
  getJobById(id: number): Observable<Job>{
    return this.http.get<Job>(`${this.jobsUrl}/${id}`)
  }
}
