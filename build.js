// Get a Handlebars instance
var hb = require("handlebars");

// Load a template
const fs = require('fs');
const template = fs.readFileSync('index.handlebars', 'utf8');

// Register Partials
hb.registerPartial('tech', fs.readFileSync('./assets/html/tech.handlebars', 'utf8'));

// Compile said template
var compiled = hb.compile(template);
var html = compiled({
    tech: {
        experience: {
            entries: [{
                orgName: "Mysa",
                title: "Software Architect (Cloud)",
                location: "St. John's, NL, Canada",
                timeSpan: "Aug. 2019 - Present (4+ years)",
                logo: "mysa.png",
                skills: [
                    "20+ AWS Services",
                    "Microserviced/Monolithic",
                    "Serverless/Classic",
                    "Big Data",
                    "Data Science & ML",
                    "Monorepo DevOps",
                    "IoT",
                    "IaC",
                    "Typescript",
                    "Python"
                ],
                details: [
                    "Designed a lightweight and novel approach for replicating, ETLing, cataloging and performing extensive and complex queries on Terabytes of DynamoDB data at almost no cost",
                    "Automated and unified Mysa's manual cloud deployments, by developing a custom framework and tooling for orchestrating deployments across different microserviced cloud applications in tandem, using Lerna, PNPM, GitHub API and AWS CDK",
                    "Invented an industry leading droop correction algorithm for Mysa's thermostats, that makes it one of the very best line-voltage thermostats in terms of high-load thermal accuracy",
                    "Developed an Express-inspired framework over AWS CDK that significantly streamlines the complexity of developing serverless API endpoints on multiple units of infrastructure",
                    "Devised an approach to achieve 100% monitoring coverage of 1000s of lambda functions within days, at near-zero cost"
                ]
        },{
            orgName: "Google",
            title: "Software Engineering Intern",
            location: "Kirkland, WA, US",
            timeSpan: "Apr. 2019 - Jul. 2019 (3 Months)",
            logo: "google.png",
            logoClass: "logo-google",
            skills: [
                "Sass Compiler",
                "Transpilers",
                "Graph Traversal",
                "DevOps",
                "Dart",
                "Polymer"
            ],
            details: [
                "Constructed an automated canonical definition of multiple sources of code, by implementing a language parser based on an Abstract Syntax Tree in Dart, and integrating it with a filesystem watcher",
                "Decreased the running time of integration tests from ~2h30mins to ~30mins, by capitalizing on the caching of repeated operations across parallel tests"
            ]
        },{
            orgName: "Mysa",
            title: "Software Developer",
            location: "St. John's, NL, Canada",
            timeSpan: "Jul. 2018 - Apr. 2019 (10 Months)",
            logo: "mysa.png",
            skills: [
                "Data Science & ML",
                "Docker",
                "AWS",
                "Python"
            ],
            details: [
                "Pioneered a machine learning pipeline using Scikit-learn, and ran it on AWS Batch, Step Functions and DynamoDB, to quarter the relative error of time-to-setpoint prediction from 58% to 13% and boost energy savings",
                "Developed droop correction models, by programming Arduino loggers for data collection, aggregating data using Pandas, and applying feature+model selection using Scikit-learn"
            ]
        },
        {
            orgName: "Memorial University of Newfoundland",
            title: "Undergraduate Research Assistant",
            location: "St. John's, NL, Canada",
            timeSpan: "May 2018 - Aug 2018 (4 Months)",
            logo: "mun.png",
            skills: [
                "Data Science & ML",
                "Neural Networks",
                "Boosting",
                "Tensorflow",
                "Python"
            ],
            details: [
                "Investigated enhancements to generative ML models that increase entropy of output distributions, by applying Boosting techniques to GANs",
                "Proposed novel methods of encoding sequential data, such as music, in a form that optimises for GANs and other non-sequential models"
            ]
        },
        {
            orgName: "HeyOrca!",
            title: "Junior Web Developer",
            location: "St. John's, NL, Canada",
            timeSpan: "May 2017 - Jun 2018 (1 year)",
            logo: "heyorca.png",
            skills: [
                "React",
                "Laravel",
                "Web Sockets",
                "Asynchronicity",
                "Webpack",
                "Doctrine ORM",
                "JavaScript",
                "PHP"
            ],
            details: [
                "Quadrupled the speed of critical services through managed asynchronization of Laravel queues, optimization of data structures and logic refactoring",
                "Rebuilt and enhanced the frontend using ReactJS, along with Web Sockets and REST APIs, in order to create a more performant and resilient SPA",
                "Reduced the SPA’s bundle size by ~40%, through proper management of dependencies and Webpack builds for all frontend micro-services"
            ]
        }]
    }
}
});

// Write HTML file
fs.writeFileSync('index.html', html);
console.log('Handlebars build complete.')