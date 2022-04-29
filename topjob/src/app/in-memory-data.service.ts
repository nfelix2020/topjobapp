import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Job } from './Job';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }


  createDb(){

    let  jobs =  [

       {
         
         id: 1,
         title: "Front End Web Developer",
         company: "Digital Data Systems",
         address:"2000 xxxxxx" ,
         city: "Malines",
         salary: "2 376 €",
         description: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
         {
         id: 2,
         title: "Java Fullstack Developer/Angular",
         company: "FX Technologies",
         address:"Boulevard Adolphe Max 7" ,
         city: "Bruxelles",
         salary: "2 800 €",
         description: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
        id: 3,
        title: "Software engineer",
        company: "NH Collection Brussels Centre",
        address:"Boulevard Adolphe Max 7" ,
        city: "Bruxelles",
        salary: "2 800 €",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content."
       },
       {
      id: 4,
      title: "Java Developer",
      company: "Digital Creator",
      address:"Boulevard Adolphe Max 7" ,
      city: "Bruxelles",
      salary: "2 800 €",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content."
     },
     {
    id: 5,
    title: "Senior Angular Developer",
    company: "MaxTech Ltd",
    address:"Boulevard Adolphe Max 7" ,
    city: "Bruxelles",
    salary: "2 800 €",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content."
   }



    ];

    return {jobs};

}
}
