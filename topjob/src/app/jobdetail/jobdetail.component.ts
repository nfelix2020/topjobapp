import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Job } from '../Job';
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

 
  

//-----------------------------------------------

// onSave(form: NgForm){
//   console.log(form.value);
//   this.updateBankAccount();

// }


// updateBankAccount(){
//   this.jobService.getJobDetails(this.jobId, this.job).subscribe(data=>{
//     console.log("the bank account is edited", data);
//     this.goToBankAccountList();
//   })
// }

// goToBankAccountList(){
//   this.router.navigateByUrl('/bank-account-list')
// }

}


