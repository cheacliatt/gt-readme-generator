// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Lincense](#license) 
* [Contributing](#contributing)
* [Test](#test)
* [Questions](#questions)  
     
## Description
${data.description}

## Installation Instructions
${data.install}

## Usage
${data.usage}

## License
This project is being licensed under the ${data.license} license.

## Contributing
${data.contribution}

## Test
${data.test}

## Questions
If you have any questions, please contact ${data.email} or visit https://github.com/${data.username}
`;
}

module.exports = generateMarkdown;

// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
