// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None of the above") {
    return ''
  }
  return `![License](https://img.shields.io/badge/License-${license}-informational)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Testing](#testing)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Contribution

${data.contribution}

## Testing:

${data.tests}

## Questions

If you have any questions or concerns you can reach me through GitHub or Email down below.

- Github: [${data.github}](https://github.com/${data.github})
- Email: [${data.email}](mailto:${data.email}) 
`;
}

module.exports = generateMarkdown;