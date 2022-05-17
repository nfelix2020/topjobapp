import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
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
    .pipe(
      catchError(this.handleError<Job[]>('getallJobs', [])) //The catchError() operator intercepts an Observable that failed. The operator then passes the error to the error handling function.
    )
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

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log the error to the console 
      return of(result as T); // Let the app keep running by returning an empty result.
    };
  }

}
