// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'Apache 2.0 License'){
    return 'https://img.shields.io/badge/License-Apache%202.0-blue.svg'
  } else if (license == 'BSD 3-Clause License'){
    return 'https://img.shields.io/badge/License-BSD%203--Clause-blue.svg'
  } else if (license == 'Eclipse Public License 1.0'){
    return 'https://img.shields.io/badge/License-EPL%201.0-red.svg'
  } else if (license == 'GNU GPL v3'){
    return 'https://img.shields.io/badge/License-GPL%20v3-blue.svg'
  } else if (license == 'IBM Public License Version 1.0'){
    return 'https://img.shields.io/badge/License-IPL%201.0-blue.svg'
  } else if (license == 'The MIT Licens'){
    return 'https://img.shields.io/badge/License-MIT-yellow.svg'
  } else if (license == 'Mozilla Public License 2.0e'){
    return 'https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg'
  } else if (license == 'Open Database License (ODbL'){
    return 'https://img.shields.io/badge/License-ODbL-brightgreen.svg'
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'Apache 2.0 License'){
    return 'https://opensource.org/licenses/Apache-2.0'
  } else if (license == 'BSD 3-Clause License'){
    return 'https://opensource.org/licenses/BSD-3-Clause'
  } else if (license == 'Eclipse Public License 1.0'){
    return 'https://opensource.org/licenses/EPL-1.0'
  } else if (license == 'GNU GPL v3'){
    return 'https://www.gnu.org/licenses/gpl-3.0'
  } else if (license == 'IBM Public License Version 1.0'){
    return 'https://opensource.org/licenses/IPL-1.0'
  } else if (license == 'The MIT License'){
    return 'https://opensource.org/licenses/MIT'
  } else if (license == 'Mozilla Public License 2.0e'){
    return 'https://opensource.org/licenses/MPL-2.0'
  } else if (license == 'Open Database License (ODbL'){
    return 'https://opendatacommons.org/licenses/odbl/'
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== null){
    const badge = renderLicenseBadge(license);
    const link = renderLicenseLink(license);
    return `## License
    ![License](${badge})(${link})`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Desription
  
  ${data.description} 


  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Test](#test)
  - [Licenses](#license)


  ## Installation

  ${data.install}


  ## Usage

  ${data.usage}


  ${renderLicenseSection(data.license)}


  ## Contribution

  ${data.contribute}


  ## Test

  ${data.test}


  ## Questions

  For any further questions regarding this project, please use the contact info below.

  -[GitHub Profile](https://github.com/${data.userName})
  
  -[Email](mailto:${data.email})

`;
}

module.exports = generateMarkdown;
