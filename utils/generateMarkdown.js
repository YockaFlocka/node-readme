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
function renderLicenseLink(license) {
  if (license === "None of the above") {
    return ''
  }
  return `- [License](#license)`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None of the above") {
    return ''
  }
  return `## License

    - ${license} is the license that you have decided to use.
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
${renderLicenseLink(data.license)}
- [Contribution](#contribution)
- [Testing](#testing)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contribution

${data.contribution}

## Testing

${data.tests}

## Questions

If you have any questions or concerns you can reach me through GitHub or Email down below.

- Github: [${data.github}](https://github.com/${data.github})
- Email: [${data.email}](mailto:${data.email}) 

## Sample Video

Below is a link to the demo of the code:

[Video](https://drive.google.com/file/d/1N-s1pYtAJ9KNR_6ZET4ww_5uiTI76jxe/view)
`;
}

module.exports = generateMarkdown;