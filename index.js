// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdowns');
// TODO: Create an array of questions for user input
const questions = [
    {
      type: "input",
      message: "What's the title?",
      name: "title"
    },
    {
      type: "input",
      message: "Describe your project.",
      name: "description"
    },
    {
      type: "input",
      message: "How do you install your application?",
      name: "installation"
    },
    {
      type: "input",
      message: "What is your app used for?",
      name: "usage"
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
      name: "repo"
    },
    {
      type: "input",
      message: "What is your email?",
      name: "email"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) console.log(err);
    });
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
      console.log(responses);
      writeToFile("./README.md", generateMarkdown(responses));
    });
}
// Function call to initialize app
init();
