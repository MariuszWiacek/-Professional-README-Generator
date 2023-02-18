const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init (){
    inquirer
     .prompt([
         {
             type: 'input',
             name: 'title',
             message: 'What is the name of your project?',
         },
         {
             type: 'input',
             name: 'description',
             message: 'Enter a small description for your project.',
         },
         {
            type: 'list',
            name: 'license',
            message: 'Which license would you like to use?',
            choices: ['Apache', 'MIT', 'ISC' ],
        },
        {
            type: 'input',
            name: 'languages',
            message: 'Which programming languages did you use?',
        },
        {
            type: 'input',
            name: 'collabInput',
            message: 'Who collaborated on your project?',
        },
         {
             type: 'input',
             name: 'installation',
             message: 'How should I install this project?',
         },
         {
            type: 'input',
            name: 'link',
            message: 'Please add link to your deployed website',
        },
         {
             type: 'input',
             name: 'usage',
             message: 'Enter usage information.',
         },
         {
             type: 'input',
             name: 'userName',
             message: 'What is your github user name?',
         },
         {
             type: 'input',
             name: 'email',
             message: 'What is your email address?',
         },
         {
             type: 'input',
             name: 'fileName',
             message: 'What name do you want for your ReadME file?',
         },

     ])
     .then((data) => {
         console.log(data);
         writeToFile(data);
     });}

      //function writes our README to file and creates that file
 function writeToFile(data) {
    fs.appendFile(`${data.fileName}.md`,generateMarkdown(data),function(err){
        if (err) throw err;
        console.log('Your new Readme is saved to new file .');
    });}

// function call to initialize program
init();
