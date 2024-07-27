// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
        return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
    case 'Apache 2.0':
        return '![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
    case 'GPL 3.0':
        return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
    case 'BSD 3-Clause':
        return '![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-orange.svg)';
    default:
        return '';
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
  switch (license) {
      case 'MIT':
          return '[MIT License](https://opensource.org/licenses/MIT)';
      case 'Apache 2.0':
          return '[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)';
      case 'GPL 3.0':
          return '[GPL 3.0 License](https://opensource.org/licenses/GPL-3.0)';
      case 'BSD 3-Clause':
          return '[BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)';
      default:t
          return '';
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {
  if (license === 'None') return '';
  return `## License\nThis project is licensed under the ${license} license. ${renderLicenseLink(license)}`;
}


// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}

${licenseBadge}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

${licenseSection}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For any questions, please contact me at [${data.email}](mailto:${data.email}).
You can also find more of my work at [GitHub/${data.github}](https://github.com/${data.github}).
  `;
}
export default generateMarkdown;
