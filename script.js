const fs = require('fs');
const inquirer = require('inquirer');
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your repo title?',
            name: 'title',
        },    
        {
            type: 'input',
            message: 'What is your  GitHub user name?',
            name: 'gitUser',
        },
        {
            type: 'input',
            message: 'What is your  email address?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'Give me a short description of your project?',
            name: 'info',
        },
    ])
    .then((data) => {
        const redmeFile = `
# ${data.title}

## Desription

${data.info}

## Table of Contents
 - [Installation](#installation)
 - [Usage](#usage)
 - [License](#license)
 - [Contributing](#contributing)
 - [Tests](#tests)
 - [Questions](#questions)

## Installation
    
## Usage

## License

## Contributing

## Tests

## Questions
[GitHub Repo](https://github.com/${data.gitUser}/${data.title})
#### ${data.email}

    `;
        // const fileName = `${data.name.toLowerCase().split(" ").join("")}.json`;
        fs.writeFile('README.md', redmeFile, (err) =>
            err ? console.log(err) : console.log("success!")
        );
    });