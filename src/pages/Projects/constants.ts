import Reversi from './Images/reversi.png'
import NEUDorm from './Images/neudorm copy.png'
import SGA from './Images/sga.png'
// TODO: Shorten desc, limit skills to 4 or 5, add images
export const PROJECTS = [
    {
        title: 'SGA Senate Nomination and Application',
        description: 'As project lead, I helped my engineers build the tool for Northeastern students to apply to become SGA represenatatives. We used React, NestJS, and Supabase to create a simple, user-friendly platform for both admin and users.',
        image: SGA,
        skills: [
            {
                name: 'React',
            },
            {
                name: 'NestJS',
            },
            {
                name: 'Supabase',
            },
            {
                name: 'TypeScript'
            }
        ]
    },
    {
        title: 'Disease Detector', 
        description: 'This project aimed to bring awareness to especially dangerous diseases. We allowed users to determine how likely they were to contract certain diseases and provide professional resources from insitutions such as the NIH and CDC.', 
        link: 'https://github.com/jakewc12/Medipredictor-AI',
        skills: [
            {
                name: 'Python'
            },
            {
                name: 'React'
            },
            {
                name: 'Bayes'
            },
            {
                name: 'SVM'
            },
            {
                name: 'Flask'
            }

        ]
    },
    {
        title: 'NEUDorms', 
        description: 'This full-stack application was aimed towards ensuring Northeastern students received fair assessments of potential on-campus housing. We utilized a RESTful API with Python Flask as the backend and HTML CSS pages as the frontend. This project was hosted on the web where it received dozens of interactive user responses.', 
        link: 'https://neudorms.com/', image: NEUDorm,
        skills: [
            {
                name: 'Flask'
            },
            {
                name: 'MySQL'
            },
            {
                name: 'HTML'
            },
            {
                name: 'CSS'
            },
            {
                name: 'AWS RDS'
            },
        ]
    },
    // {
    //     title: 'F1 Race Predictor', 
    //     description: 'This project attempted to utilize machine learning principles to understand F1 tendancies. Utilizing decades of F1 race results, we trained several ML models aimed at classifying F1 racers based on race data. Additionally, this project utilized classification reports to visualize the effectiveness of trained models.', 
    //     link: 'https://github.com/jakewc12/DS3000-F1-Project', 
    //     skills: [
    //         {
    //             name: 'Python'
    //         },
    //         {
    //             name: 'ML'
    //         },
    //         {
    //             name: 'SKLearn'
    //         },
    //         {
    //             name: 'Random Forest'
    //         },
    //         {
    //             name: 'Chi Squared Test'
    //         },
    //         {
    //             name: 'KNN'
    //         },
    //         {
    //             name: 'Seaborn'
    //         },
    //     ]
    // },
    {
        title: 'Reversi', 
        description: 'This board game can be downloaded as a Jar file and played as an interactive two player game. Developed for my Object Oriented Programming class, this project focuses on different programming principles like Abstraction and Model, View, Controller. It involves sophisticated JUnit tests to ensure pricise performance.', 
        link: 'https://github.com/jakewc12/Reversi',         image: Reversi,
        skills: [
            {
                name: 'Java'
            },
            {
                name: 'JSwing'
            },
            {
                name: 'JUnit5'
            },
            {
                name: 'MVC'
            },
        ]
    }

]