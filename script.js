const fs = require('fs');
const inquirer = require('inquirer');
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Where are you from?',
            name: 'location',
        },
        {
            type: 'input',
            message: 'What is is your GitHub username?',
            name: 'GitHub',
        },
        {
            type: 'input',
            message: 'What LinkedIn URL?',
            name: 'LinkedIn',
        }
    ])
    .then((data) => {
        const userName = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <title>Document</title>
</head>
<body>
    <div class="jumbotron" style="background-color: lightskyblue;">
            <h1 class="display-4">Hi! My name is ${data.name}</h1>
            <p class="lead">I am from ${data.location}</p>
            <hr class="my-4">
            <h2>Contact Me</h2>
            <h6>My GitHub username is: ${data.GitHub}</h6>
            <h6>LinkedIn: ${data.LinkedIn}</h6>  
    </div>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
    <script type="text/javascript" src="index.js"></script>
</body>
</html>
    `;
        const fileName = `${data.name.toLowerCase().split(" ").join("")}.json`;
        fs.writeFile('index.html', userName, (err) =>
            err ? console.log(err) : console.log("success!")
        );
    });