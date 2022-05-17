export class Job {

    id: number;
    title: string;
    company: string;
    address:string;
    city: string;
    salary: string;
    contract: string;
    introduction:{
        firstIntro:string;
        secondIntro:string
    } 
    fullDescription: {
        firstSubtitle: string;
        firstDescription: string;
        secondSubtitle: string;
        secondDescription: string
    }
}