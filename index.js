// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Project title?",
        validate: your_title => {
            if (your_title) {
                return true;
            } else {
                console.log("Please enter a title to continue.")
                return false;
            }
        } 
    },
    {
        type: "input",
        name: "description",
        message: "Project description?",
        validate: your_description => {
            if (your_description) {
                return true;
            } else {
                console.log("Enter a project description.")
                return false;
            }
        }
    },
    {
        type: "input",
        name: "installation",
        message: "Installation instructions?",
        validate: your_installation => {
            if (your_installation) {
                return true;
            } else {
                console.log("Enter installation steps to continue.")
                return false;
            }
        }  
    },
    {
        type: "input",
        name: "usage",
        message: "Project usage?",
        validate: your_usage => {
            if (your_usage) {
                return true;
            } else {
                console.log("Enter information on how to use the project.")
                return false;
            }
        } 
    },
    {
        type: "list",
        name: "license",
        message: "Choose a license that will suit your project.",
        choices: ['Apache', 'MIT', 'ISC', 'GNU', 'None of the above'],
        validate: your_license => {
            if (your_license) {
                return true;
            } else {
                console.log("Select a license to continue.")
                return false;
            }
        }
    },
    {
        type: "input",
        name: "contribution",
        message: "How can users contribute to the project?",
        validate: your_contribution => {
            if (your_contribution) {
                return true;
            } else {
                console.log("Please provide information on how to contribute to the project.")
                return false;
            }
        }  
    },
    {
        type: "input",
        name: "tests",
        message: "How would the user test this project?", 
        validate: your_test => {
            if (your_test) {
                return true;
            } else {
                console.log("Explain how to test the project to continue.")
                return false;
            }
        } 
    },
    {
        type: "input",
        name: "github",
        message: "Enter your GitHub Username", 
        validate: github_input => {
            if (github_input) {
                return true;
            } else {
                console.log("Enter your GitHub username to continue.")
                return false;
            }
        } 
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email for any questions users may have.", 
        validate: email_input => {
            if (email_input) {
                return true;
            } else {
                console.log("Please enter your email to continue.")
                return false;
            }
        } 
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        };
      console.log("Success! You can preview your README.md file");  
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
}

// Function call to initialize app
init();