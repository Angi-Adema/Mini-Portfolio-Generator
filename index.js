const inquirer = require('inquirer');
const fs = require('fs');

const mainPage = ({ name, location, language, linkedIn, gitHub }) =>
    `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossorigin="anonymous"
        />
        <style>
          .jumbotron {
            background-color: lightgray;
            padding: 5%;
          }
        </style>
      </head>
      <body>
        <div class="jumbotron">
          <div class="container">
            <h1 class="display-4">Hello, my name is ${name}!</h1>
            <p class="lead">
              I am from ${location}!
            </p>
            <p class="lead">
              My favorite language is ${language}.
            </p>
            <hr class="my-4" />
            <p>
              Additional contact information:
            </p>
            <ul class="list-group">
              <li class="list-group-item">Visit my GitHub profile at ${gitHub}.</li>
              <li class="list-group-item">To view my LinkedIn page go to ${linkedIn}.</li>
            </ul>
          </div>
        </div>
      </body>
    </html>`;

inquirer    
    .prompt([
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
            err ? console.log(err) : console.log('Success!')
        );
    });