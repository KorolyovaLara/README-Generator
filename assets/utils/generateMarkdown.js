// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`
}

// Function that returns the license link
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `https://opensource.org/licenses/MIT`
  } else 
  if (license === "ISC") {
    return `https://opensource.org/licenses/ISC`
  } else 
  if (license === "BSD3") {
    return `https://opensource.org/licenses/BSD-3-Clause`
  } else 
  if (license === "Mozilla") {
    return `https://opensource.org/licenses/MPL-2.0`
  } else 
  if (license === "Apache") {
    return `https://opensource.org/licenses/Apache-2.0`
  } else {
    return `https://opensource.org/licenses/lgpl-3.0.html`
  }
}

// Function that returns the license section of README
function renderLicenseSection(license) {
  return `[${renderLicenseBadge(license)}](${renderLicenseLink(license)})`
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
  ${renderLicenseSection(data.license)}

## Description
 ${data.description}

## *Table of Contents*

* [Installation](#installation)
* [Usage](#usage)
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
  * Any additional questions or feedback, feel free to [send an email](mailto:${data.email}). 

## License
  Copyright (c) [${data.author}](https://github.com/${data.github}). All rights reserved.

  Licensed under the [${data.license}](${renderLicenseLink(data.license)}) license.

`;
}

module.exports = generateMarkdown;
