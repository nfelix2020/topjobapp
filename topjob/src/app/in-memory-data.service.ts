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
         address:"Intersysto" ,
         city: "7500 Tournai",
         salary: "2 376 €",
         contract: "Temps Plein, CDI",
         introduction:{
          firstIntro:"Avez une expertise en développement front-end dans des technologies telles que Angular JS, Angular IO, JavaScript et JQuery ainsi qu’une expérience avec des outils de développement traditionnels?",
          secondIntro:"Respecter les bonnes pratiques de développement (clean code, TDD, pair-programming)"
         },
         fullDescription:{
          firstSubtitle: "Description de la fonction",
          firstDescription: `En tant que développeurs vos missions seront les suivantes :

          Participer à la mise en oeuvre d'une nouvelle solution (build) et assurer le développement de nouvelles fonctionnalités sur des solutions existantes (run)
          Développer des applications mobiles et des sites web d’administration.
          Respecter les bonnes pratiques de développement (clean code, TDD, pair-programming)
          Apporter un soin particulier à la couverture des tests
          Evoluer dans un environnement Agile`,
          secondSubtitle: `Vous êtes passionnés par le développement d'applications mobiles utilisant le stack technologique React Native.

          Vous avez une expérience en tant que développeur d’applications mobiles natives - Vous avez un baccalauréat ou une maîtrise ou l'équivalent par expérience.
          
          Vous connaissez et possédez une expérience éprouvée des outils, frameworks et technologies suivants:
          
          - React Native avec une expérience de déploiement sur les appareils Android et iOS (min 2 ans) - TypeScript et JavaScript (ECMAScript 6) 
          - Redux, React Navigation, ...
          - Node.js, npm, Yarn, ...
          - Packaging et publication d'applications natives sur Google Play Store et Apple Play Store - Programmation orientée objet avec TypeScript, tests unitaires, ...
          - Maitrise des principes de conception et d'intégration de services Web RESTful
          
          Une expérience des technologies et des stacks suivants est considérée comme un atout:
          
          - Implémentation de modules natifs React Native en Java et / ou Objective-C
          - Intégration i18n dans les applications React Native
          - Développement d'applications Java Android 
          
          - Développement d'applications iOS Objective-C et / ou Swift
          
          - Linux et Docker
          
          - Vous êtes curieux, proactif, créatif et flexible, avec un fort appétit d’apprentissage et un grand esprit de collaboration.
          
          - Etre familiarisé avec les méthodologies Agile Scrum / Kanban est également considéré comme un atout.
          
          - Vous parlez couramment le français et / ou l'anglais.`,
          secondDescription: "dddddddddddddddddddd"
         }
        },
         {
         id: 2,
         title: "Java Fullstack Developer/Angular",
         company: "FX Technologies",
         address:"Boulevard Adolphe Max 7" ,
         city: "Bruxelles",
         salary: "2 800 €",
         contract: "Full Time",
         introduction:{
          firstIntro:"Avez une expertise en développement front-end dans des technologies telles que Angular JS, Angular IO, JavaScript et JQuery ainsi qu’une expérience avec des outils de développement traditionnels?",
          secondIntro:"Respecter les bonnes pratiques de développement (clean code, TDD, pair-programming)"
         },
         fullDescription:{
          firstSubtitle: "aaaaaaaaaaaaaaa",
          firstDescription: "bbbbbbbbbbbbbbbb",
          secondSubtitle: "ccccccccccccccc",
          secondDescription: "dddddddddddddddddddd"
         }
        },
        {
        id: 3,
        title: "Software engineer",
        company: "NH Collection Brussels Centre",
        address:"Boulevard Adolphe Max 7" ,
        city: "Bruxelles",
        salary: "2 800 €",
        contract: "Full Time",
        introduction:{
          firstIntro:"Avez une expertise en développement front-end dans des technologies telles que Angular JS, Angular IO, JavaScript et JQuery ainsi qu’une expérience avec des outils de développement traditionnels?",
          secondIntro:"Respecter les bonnes pratiques de développement (clean code, TDD, pair-programming)"
         },
        fullDescription:{
          firstSubtitle: "aaaaaaaaaaaaaaa",
          firstDescription: "bbbbbbbbbbbbbbbb",
          secondSubtitle: "ccccccccccccccc",
          secondDescription: "dddddddddddddddddddd"
         }
       },
       {
      id: 4,
      title: "Java Developer",
      company: "Digital Creator",
      address:"Boulevard Adolphe Max 7" ,
      city: "Bruxelles",
      salary: "2 800 €",
      contract: "Full Time",
      introduction:{
        firstIntro:"Avez une expertise en développement front-end dans des technologies telles que Angular JS, Angular IO, JavaScript et JQuery ainsi qu’une expérience avec des outils de développement traditionnels?",
        secondIntro:"Respecter les bonnes pratiques de développement (clean code, TDD, pair-programming)"
       },
      fullDescription:{
        firstSubtitle: "aaaaaaaaaaaaaaa",
        firstDescription: "bbbbbbbbbbbbbbbb",
        secondSubtitle: "ccccccccccccccc",
        secondDescription: "dddddddddddddddddddd"
       }
     },
     {
    id: 5,
    title: "Senior Angular Developer",
    company: "MaxTech Ltd",
    address:"Boulevard Adolphe Max 7" ,
    city: "Bruxelles",
    salary: "2 800 €",
    contract: "Full Time",
    introduction:{
      firstIntro:"Avez une expertise en développement front-end dans des technologies telles que Angular JS, Angular IO, JavaScript et JQuery ainsi qu’une expérience avec des outils de développement traditionnels?",
      secondIntro:"Respecter les bonnes pratiques de développement (clean code, TDD, pair-programming)"
     },
    fullDescription:{
      firstSubtitle: 'What we can do together',
      firstDescription: `By joining us, you will be part of a team of creative people designing and developing key digital features of space systems and experimenting innovative solutions for ground segments.  Our development environment is cloud native and Software as a Service oriented. 
      We work in an Agile way, with an entrepreneur mindset, and foster excellence in user experience. By joining us, you will be part of a team of creative people designing and developing key digital features of space systems and experimenting innovative solutions for ground segments.  Our development environment is cloud native and Software as a Service oriented. We work in an Agile way, with an entrepreneur mindset, and foster excellence in user experience.By joining us, you will be part of a team of creative people designing and developing key digital features of space systems and experimenting innovative solutions for ground segments.  Our development environment is cloud native and Software as a Service oriented. 
      We work in an Agile way, with an entrepreneur mindset, and foster excellence in user experience. By joining us, you will be part of a team of creative people designing and developing key digital features of space systems and experimenting innovative solutions for ground segments.  Our development environment is cloud native and Software as a Service oriented. We work in an Agile way, with an entrepreneur mindset, and foster excellence in user experience.By joining us, you will be part of a team of creative people designing and developing key digital features of space systems and experimenting innovative solutions for ground segments.  Our development environment is cloud native and Software as a Service oriented. 
      We work in an Agile way, with an entrepreneur mindset, and foster excellence in user experience. By joining us, you will be part of a team of creative people designing and developing key digital features of space systems and experimenting innovative solutions for ground segments.  Our development environment is cloud native and Software as a Service oriented. We work in an Agile way, with an entrepreneur mindset, and foster excellence in user experience.By joining us, you will be part of a team of creative people designing and developing key digital features of space systems and experimenting innovative solutions for ground segments.  Our development environment is cloud native and Software as a Service oriented. 
      We work in an Agile way, with an entrepreneur mindset, and foster excellence in user experience. By joining us, you will be part of a team of creative people designing and developing key digital features of space systems and experimenting innovative solutions for ground segments.  Our development environment is cloud native and Software as a Service oriented. We work in an Agile way, with an entrepreneur mindset, and foster excellence in user experience.By joining us, you will be part of a team of creative people designing and developing key digital features of space systems and experimenting innovative solutions for ground segments.  Our development environment is cloud native and Software as a Service oriented. 
      We work in an Agile way, with an entrepreneur mindset, and foster excellence in user experience. By joining us, you will be part of a team of creative people designing and developing key digital features of space systems and experimenting innovative solutions for ground segments.  Our development environment is cloud native and Software as a Service oriented. We work in an Agile way, with an entrepreneur mindset, and foster excellence in user experience.By joining us, you will be part of a team of creative people designing and developing key digital features of space systems and experimenting innovative solutions for ground segments.  Our development environment is cloud native and Software as a Service oriented. 
      We work in an Agile way, with an entrepreneur mindset, and foster excellence in user experience. By joining us, you will be part of a team of creative people designing and developing key digital features of space systems and experimenting innovative solutions for ground segments.  Our development environment is cloud native and Software as a Service oriented. We work in an Agile way, with an entrepreneur mindset, and foster excellence in user experience.By joining us, you will be part of a team of creative people designing and developing key digital features of space systems and experimenting innovative solutions for ground segments.  Our development environment is cloud native and Software as a Service oriented. 
      We work in an Agile way, with an entrepreneur mindset, and foster excellence in user experience. By joining us, you will be part of a team of creative people designing and developing key digital features of space systems and experimenting innovative solutions for ground segments.  Our development environment is cloud native and Software as a Service oriented. We work in an Agile way, with an entrepreneur mindset, and foster excellence in user experience.`,
      
      secondSubtitle: ``,
      
      secondDescription: "dddddddddddddddddddd"
     }
   }

    ];

    return {jobs};

}
}
