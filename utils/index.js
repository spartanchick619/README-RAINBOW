// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('.utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What's the title?",
        name: "titile"
    },
    {
        type: "input",
        message: "Discribe your project.",
        name: "description"
    },
    {
        type: "input",
        message: "What is #1 in your table of contents?",
        name: "one"
    },
    {
        type: "input",
        message: "What is #2 in your table of contents?",
        name: "two"
    },
    {
        type: "input",
        message: "What is #3 in your table of contents?",
        name: "three"
    },
    {
        type: "input",
        message: "What is #4 in your table of contents?",
        name: "four"
    },

    {
        type: "input",
        message: "What is #5 in your table of contents?",
        name: "five"
    },
    {
        type: "input",
        message: "How do you install your application?",
        name: "install"
    },
    {
        type: "input",
        message: "What is your app used for?",
        name: "use"
    },
    {
        type: "list",
        message: "Which license will you use?",
        choices: ["MIT", "ISC", "IBM"],
        name: "license"
    },
    {
        type: "input",
        message: "How does another person contribute to your project?",
        name: "contribute"
    },
    {
        type: "input",
        message: "Describe tests run on your project.",
        name: "tests"
    },
    {
        type: "input",
        message: "What is your GitHub Username?",
        name: "username"
    },
    {
    type: "input",
    message: "What is your email?",
    name: "email"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data){
      if (err) console.log(err);
    });
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
      console.log(response);
      writeToFile("./dist/README.md", generateMarkdown(responses));
    });
}
// Function call to initialize app
init();
