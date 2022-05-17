import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from './Job';

@Injectable({
  providedIn: 'root'
})
export class JobserviceService {

  private jobsUrl = 'api/jobs/'; 

  SERVER_URL: string = "http://localhost:8080/api/" 

  constructor(private http: HttpClient) { }

  getallJobs():Observable<Job[]>{
    // return this.http.get<Job[]>(`${this.jobsUrl}`);
    return this.http.get<Job[]>(this.jobsUrl)
  }

  getJobById(id: number): Observable<any>{
    return this.http.get(`${this.SERVER_URL + 'jobs'}/${id}`)
  }


  // getJobById(id: number): Observable<Job>{
  //   return this.http.get<Job>(`${this.jobsUrl}/${id}`)
  // }

  
  // public getJobDetails(id: number, job: Job) : Observable<Object>{
  //   return this.http.put<Job>(`${this.jobsUrl}/${id}`, job);
  // }

}
