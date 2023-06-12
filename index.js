const inquirer = require('inquirer');
const fs = require('fs');

const mainPage = ({ name, location, language, linkedIn, gitHub }) =>
    ``;

inquirer    
    .createPromptModule([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What city and state are you located in?',
            name: 'location',
        },
        {
            type: 'input',
            message: 'What is your favorite programming language?',
            name: 'language',
        },
        {
            type: 'input',
            message: 'Enter LinkedIn URL.',
            name: 'linkedIn',
        },
        {
            type: 'input',
            message: 'Enter your GitHub URL.',
            name: 'gitHub',
        },
    ])
    .then((answers) => {
        const mainPageContent = mainPage(answers);

        fs.writeFile('index.html', mainPageContent, (err) =>
            err ? console.log(err) : console.log('Success!'));
    });