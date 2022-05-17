import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Job } from '../Job';
import {Location} from '@angular/common';
import { JobserviceService } from '../jobservice.service';

@Component({
  selector: 'app-jobdetail',
  templateUrl: './jobdetail.component.html',
  styleUrls: ['./jobdetail.component.css']
})
export class JobdetailComponent implements OnInit {

   job: Job= new Job();
   jobId: number;


  constructor(
    private jobService: JobserviceService,
    private location: Location,
    private route: ActivatedRoute, 
    private router:Router) { }


  ngOnInit(): void {

 //Recuperer l'Id de chaque job
 this.jobId= parseInt(this.route.snapshot.params['id']); 
 
 //Acces aux methodes du service qui a été injecté
 this.jobService.getJobById(this.jobId).subscribe( data => {
   console.log(data);
   this.job=data;
 })
  }

  goBack(){
    this.location.back()
  }

 
  

}


function ParamMap(params: any, ParamMap: any): string {
  throw new Error('Function not implemented.');
}

function params(params: any, ParamMap: (params: any, ParamMap: any) => string): string {
  throw new Error('Function not implemented.');
}

