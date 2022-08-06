// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs= require('fs');
// TODO: Create an array of questions for user input
inquirer
 .prompt([
    {
        type: 'input',
        name:'motivation',
        message: 'What was your motivation?',
    },
    {
        type:'input',
        name: 'build',
        message: 'Why did you build this project?',
    },
    {
        type: 'input',
        name: 'solve',
        message: 'What problems does it solve?'
    },
    {
        type: 'input',
        name: 'learn',
        message: 'What did you learn?',
    }
])
// TODO: Create a function to write README file
  .then((data) => {
    const filename = `${data.who.toLowerCase().split(' ').join('')}.json`;
console.log(data)
    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });



