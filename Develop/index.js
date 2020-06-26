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

    choices: [
      {
        name: "MIT Lincense",
        value: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
      },
      {
        name: "Apache License 2.0",
        value: "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
      },
      {
        name: "GNU General Public License",
        value: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
      },
      {
        name: "Mozilla Public License 2.0",
        value: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
      },
      
    ]
  },

  // "MIT License", "Apache License 2.0", "GNU General Public License", "Mozilla Public License 2.0"],


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
      "./sampleReadmes/testREADME.md",
      generateMarkdown(data),
      function (err) {
        if (err) {
          return console.log(err);
        }

        console.log("Success!");
      }
    );
  });
};

// function call to initialize program
init();
