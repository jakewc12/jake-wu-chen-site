import Image from './Images/unnamed.jpg'
export const PROJECTS = [
    {
        title: 'Disease Detector', 
        description: 'This project aimed to bring awareness to especially dangerous diseases. We intertwined different CS topics, such as full-stack development, ML training, and web scraping. We allowed users to determine how likely they were to contract certain diseases and provide professional resources from insitutions such as the NIH and CDC.', 
        skills: [
            {
                name: 'Python'
            },
            {
                name: 'TypeScript'
            },
            {
                name: 'React'
            },
            {
                name: 'RESTful API'
            },
            {
                name: 'Pandas'
            },
            {
                name: 'Bayes'
            },
            {
                name: 'SVM'
            },
            {
                name: 'Flask'
            },
            {
                name: 'KNN'
            },

        ]
    },
    {
        title: 'NEUDorms', 
        description: 'This full-stack application was aimed towards ensuring Northeastern students received fair assessments of potential on-campus housing. We utilized a RESTful API with Python Flask as the backend and HTML CSS pages as the frontend. We also used several cloud services such as AWS RDS to host our database of reviews and AWS EC2 to host the source code of this project. We also utilized caching to ensure efficient SQL queries for reviews pages. This project was hosted on the web where it received dozens of interactive user responses.', 
        link: 'https://neudorms.com/', 
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
            {
                name: 'Docker'
            },
            {
                name: 'Hashing'
            }
        ]
    },
    {
        title: 'F1 Race Predictor', 
        description: 'This project attempted to utilize machine learning principles to understand F1 tendancies. Utilizing decades of F1 race results, we trained several ML models aimed at classifying F1 racers based on race data. Additionally, this project utilized classification reports to visualize the effectiveness of trained models.', 
        link: 'https://github.com/jakewc12/DS3000-F1-Project', 
        skills: [
            {
                name: 'Python'
            },
            {
                name: 'ML'
            },
            {
                name: 'SKLearn'
            },
            {
                name: 'Random Forest'
            },
            {
                name: 'Chi Squared Test'
            },
            {
                name: 'KNN'
            },
            {
                name: 'Seaborn'
            },
        ]
    },
    {
        title: 'Reversi', 
        description: 'This board game can be downloaded as a Jar file and played as an interactive two player game. Developed for my Object Oriented Programming class, this project focuses on different programming principles like Abstraction and Model, View, Controller. It involves sophisticated JUnit tests to ensure pricise performance.', 
        link: 'https://github.com/jakewc12/Reversi',         image: Image,
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
                name: 'Command Pattern'
            },
            {
                name: 'Factory Pattern'
            },
            {
                name: 'MVC'
            },
        ]
    }

]