const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is the name of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Please provide a description of your project.",
    name: "description",
  },
  {
    type: "input",
    message: "Please provide installation instructions.",
    name: "install",
  },
  {
    type: "input",
    message: "Please provide usage instructions.",
    name: "usage",
  },
  {
    type: "input",
    message: "Please list any contribution instructions.",
    name: "contribution",
  },
  {
    type: "input",
    message: "Please explain how to test this code.",
    name: "test",
  },
  {
    type: "list",
    message: "What is your preferred license of this project?",
    name: "license",
    choices: ["this", "that", "whatever"],
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "username",
  },
];

// function to write README file
// function writeToFile(fileName, data) {
//   fs.writeFile(fileName, data, "utf-8");
// }
// function to initialize program
function init() {
  inquirer.prompt(questions).then((data) => {
    fs.writeFile(
      "testREADME.md",
      generateMarkdown(data),
      function (err) {
        if (err) {
          return console.log(err);
        }

        console.log("Success!");
      }
    );
  });
}

// function call to initialize program
init();
