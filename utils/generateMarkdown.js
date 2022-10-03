// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
  if (license === 'None') {
    return '';
  } else {
    return `![Github Badge](https://img.shields.io/badge/License-${license}-blue.svg)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  } else {
    return `- [License](#license)`
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  } else {
    return `## License

    This program is covered under the ${license} license`;
  }
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = ({
  title,
  description,
  installation,
  usage,
  contribution,
  license,
  github,
  email
}) => {
  return `# ${title}

  ${renderLicenseBadge(license)}

  ## Description
  ${description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  ${renderLicenseLink(license)}
  - [Questions](#Questions)

  ## Installation
  ${installation}

  ## Usage
  ${usage}

  ## Credits
  ${contribution}

  ${renderLicenseSection(license)}

  ## Questions
  You can open an issue to reach me at https://github.com/${github} or email me questions directly at ${email}
  `;
}

module.exports = {
  generateMarkdown,
}
