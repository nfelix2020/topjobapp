import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Job } from '../Job';
import { JobserviceService } from '../jobservice.service';

@Component({
  selector: 'app-jobslist',
  templateUrl: './jobslist.component.html',
  styleUrls: ['./jobslist.component.css']
})
export class JobslistComponent implements OnInit {

  jobList: Job[]=[];
  
  selectedJob: Job;
  jobId: number;

  constructor(
    private jobService: JobserviceService,
    private router:Router, 
    private route: ActivatedRoute
    ) { }
  

  ngOnInit(): void {

     //Recuperer l'Id de chaque job
    //  this.jobId= parseInt(this.route.snapshot.params['id']); 
    
    this.getAllJobs();
  }

  getAllJobs(){
    this.jobService.getallJobs().subscribe(data=>{
      this.jobList=data;
    })
  }


  
     
   
  

 // HIGHLIGHT A SELECTED JOB 

 public currentlyClickedJobId: number = 0;  //initially, no card is clicked, because the Id is 0

 public setcurrentlyClickedJobId(jobId: number): void {
   this.currentlyClickedJobId = jobId; //When a card is clicked, we take the Id of that selected card -->cardId
 }

 public checkIfJobIsClicked(jobId: number): boolean {
   return jobId === this.currentlyClickedJobId; // this solution remembers the Id of the last clicked job to highlight just that one.
 }
//END

  cardClick(){
    // this.router.navigateByUrl('/newjob');
  }

  // showJobDetails(){
  //   this.jobService.getJob(this.jobId, this.j).subscribe(data=>{
  //     console.log(data);
  //     this.job=data;
  //   })
  // }
  
  onSelectJob(job: Job): void{

    this.selectedJob=job;
    // this.router.navigateByUrl("/job/" + job.id +"/description");
    
  }




}
