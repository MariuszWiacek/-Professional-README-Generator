// function to generate markdown for README

function generateMarkdown(data) {
  return `
  # <p align="center">${data.title}</p>
  ## Table of Contents
  * [Description](#description)
  * [Usage](#usage)
  * [Languages](#languages)
  * [Installation Instructions](#installation)
  * [Contributing](#Contributing)
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
  ## License
  ${getLicenseBadge(data.license)} 
  * Link: ${getLicenseLink(data.license)}
  ## Contact me
  * Profile: https://github.com/${data.userName}
  * Email: ${data.email} `;




}

//function that returns a license badge
function getLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;
    case 'Apache 2.0':
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      break;
    case 'ISC':
      return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
      break;
    default:
      return '';
      break;
  }
}

//funtion to return license link
function getLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return `https://opensource.org/licenses/MIT`;
      break;
    case 'Apache 2.0':
      return `https://opensource.org/licenses/Apache-2.0`;
      break;
    case 'ISC':
      return `https://opensource.org/licenses/ISC`;
      break;
    default:
      return '';
      break;
  }
}

module.exports = generateMarkdown;
