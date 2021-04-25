// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`
}

// TODO: Create a function that returns the license link
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
function renderLicenseSection(license) {}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${data.title}

  ${renderLicenseBadge(data.license)}

## Description
 ${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#installation)
* [Contributing](#contributing)
* [Tests](#tests)
* [Credits](#credits)
* [Features](#features)
* [Questions](#questions)
* [License](#license)

## Installation
  ${data.installation}

## Usage
  ${data.usage}
  
## Contributing
  ${data.contribution}

## Tests
  ${data.test}

## Credits
  ${data.credits}

## Features
  ${data.features}

## Questions
  * Checkout my [GitHub profile](https://github.com/${data.github})
  * Any additional questions or feed back, feel free to [send an email](mailto:${data.email}). 

## License
  Copyright (c) [${data.author}](https://github.com/${data.github}). All rights reserved.
  Licensed under the ${data.license} license.

`;
}

module.exports = generateMarkdown;
