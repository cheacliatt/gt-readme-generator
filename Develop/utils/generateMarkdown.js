// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
    ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [Lincense](#lincense) 
    * [Contributing](#contributing)
    * [Test](#test)
    * [Questions](#questions)  
     
    ## Description
    ${data.description}

    ## Installation Instructions
    ${data.install}

    ## Usage
    ${data.usage}

    ## Lincense
    ${data.license}

    ## Contrubutors
    ${data.contrubution}

    ## Test
    ${data.test}
    
    ## Questions
    If you have any questions, please contact ${data.email} or visit https://github.com/${data.username}


`;
}

module.exports = generateMarkdown;

// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
