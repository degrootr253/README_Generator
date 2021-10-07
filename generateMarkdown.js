// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch (license) {
        case "MIT":
            return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]"
        break;

        case "Apache 2.0":
            return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]"
        break;

        case "Halloween":
            return "[![License](https://img.shields.io/badge/badge-halloween-orange)]"
        break;

        default:
            break;
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    switch (license) {
        case "MIT":
            return `https://opensource.org/licenses/MIT`
        break;

        case "Apache 2.0":
            return `https://opensource.org/licenses/Apache-2.0`
        break;

        case "Halloween":
            return `https://img.shields.io/badge/badge-halloween-orange`
        break;

        default:
            break;
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
   return `Liscencing \n This is licensed under the following terms ${renderLicenseLink(license)} \n ${renderLicenseBadge(license)}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
   
  return `# ${data.title}

## Description
${data.description}

## Table of Contents
${data.contents}

## Installation
${data.installation}

## Usage
${data.usage}

##  ${renderLicenseSection(data.license)}

## Contributors
${data.contributors}

## Tests
${data.tests}

## Questions
${data.questions}`
}

module.exports = generateMarkdown;
