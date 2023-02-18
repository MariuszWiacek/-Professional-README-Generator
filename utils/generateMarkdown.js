// function to generate markdown for README

function generateMarkdown(data) {
  return `
  ###<p align="center">**${data.title}**</p>
  ## Table of Contents
  * [Description](#description)
  * [Usage](#usage)
  * [Languages](#languages)
  * [Installation Instructions](#installation)
  * [Collaboratores](#Collaboratores)
  * [License](#license)
  * [ContactMe](#contactMe)
  ## Description
  * ${data.description}
  ## Usage
  * ${data.usage}
  ## Languages
  * ${data.languages}
  ## Installation
  * ${data.installation}
  ## Contributing
  * ${data.collabInput}
  # License
  
  ## Contact me
  * Profile: https://github.com/${data.userName}
  * Email: ${data.email} `;
  
  
  
  
  }

module.exports = generateMarkdown;
