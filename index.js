// array of questions for user
const questions = ['What is the name of your project or repo?',
    'What is your motivation behind this app?',
    'How do you use this app?',
    'How is this app installed?',
    'Enter link or path to image or gif of app.',
    'Enter alt text for that image or gif.',
    'What is your GitHub Repo URL?',
    'What is the live URL?',
    'How can a user report issues?',
    'How can a user make contributions?',
];
const fs = require('fs');
const inquirer = require('inquirer');

// function to write README file
function writeToFile(data) {
    const userResponse = `
# ${data.repoName}
## Motivation
${data.motivation}
## How to Use
${data.howToUse}
## Installation
${data.installation}
## Mock-Up
![${data.imageAlt}](${data.imageLink})
## Deployment
* Link to [GitHub Repository](${data.gitHubURL})
* Link to [Live URL](${data.liveURL})
## How to Report Issues
${data.reportIssues}
## How to Contribute
${data.contribute}
    `
    fs.writeFile('README.md', userResponse, (err) =>
        err ? console.log(err) : console.log('complete')
    )
}

// function to initialize program
function init() {

    function Prompts(type, message, name) {
        this.type = type;
        this.message = message;
        this.name = name;
    }
    const question1 = new Prompts('input', questions[0], 'repoName')
    const question2 = new Prompts('input', questions[1], 'motivation')
    const question3 = new Prompts('input', questions[2], 'howToUse')
    const question4 = new Prompts('input', questions[3], 'installation')
    const question5 = new Prompts('input', questions[4], 'imageLink')
    const question6 = new Prompts('input', questions[5], 'imageAlt')
    const question7 = new Prompts('input', questions[6], 'gitHubURL')
    const question8 = new Prompts('input', questions[7], 'liveURL')
    const question9 = new Prompts('input', questions[8], 'reportIssues')
    const question10 = new Prompts('input', questions[9], 'contribute')



    inquirer
        .prompt([

            {
                type: question1.type,
                message: question1.message,
                name: question1.name,
            },
            {
                type: question2.type,
                message: question2.message,
                name: question2.name,
            },
            {
                type: question3.type,
                message: question3.message,
                name: question3.name,
            },
            {
                type: question4.type,
                message: question4.message,
                name: question4.name,
            },
            {
                type: question5.type,
                message: question5.message,
                name: question5.name,
            },
            {
                type: question6.type,
                message: question6.message,
                name: question6.name,
            },
            {
                type: question7.type,
                message: question7.message,
                name: question7.name,
            },
            {
                type: question8.type,
                message: question8.message,
                name: question8.name,
            },
            {
                type: question9.type,
                message: question9.message,
                name: question9.name,
            },
            {
                type: question10.type,
                message: question10.message,
                name: question10.name,
            },

        ])

        .then((data) => {
            writeToFile(data);
        })

}

// function call to initialize program
init();