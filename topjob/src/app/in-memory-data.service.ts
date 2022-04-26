import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Job } from './Job';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }


  createDb(){

    let  jobs: Job[] =  [

       {

         
         
         id: 1,
         title: "Day/night Receptionist(e) NH Brussels Airport M/V/X",
         company: "Holiday Inn Express Mechelen",
         address:"2000 xxxxxx" ,
         city: "Malines",
         salary: "2 376 €",
         description: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
         {
           id: 2,
         title: "Day/night Receptionist(e) NH Collection Brussels Centre M/V/X",
         company: "NH Collection Brussels Centre",
         address:"Boulevard Adolphe Max 7" ,
         city: "Bruxelles",
         salary: "2 800 €",
         description: "Some quick example text to build on the card title and make up the bulk of the card's content."
        }



    ];

    return {jobs};

}
}
