// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
    # ${data.description}
    # Table of Contents
    *[Installation](#installation) 
    Usage
    # License
    # Contributing
    # Tests
    # Questions
    Badges
    # Installation Instructions
    ${data.install}
    # Usage
    ${data.usage}
    # Contrubutors
    ${data.contrubution}
    # Test
    ${data.test}
    # Questions
    If you have any questions, please contact ${data.email}.


`;
}

module.exports = generateMarkdown;



// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions