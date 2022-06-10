// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licenseItem) {
  if (licenseItem == 'Apache 2.0 License'){
    return 'https://img.shields.io/badge/License-Apache%202.0-yellowgreen.svg'
  }
  if (licenseItem == 'BSD 3-Clause License'){
    return 'https://img.shields.io/badge/License-BSD%203--Clause-blue.svg'
  }
  if (licenseItem == 'Eclipse Public License 1.0'){
    return 'https://img.shields.io/badge/License-EPL%201.0-red.svg'
  }
  if (licenseItem == 'GNU GPL v3'){
    return 'https://img.shields.io/badge/License-GPL%20v3-blue.svg'
  }
  if (licenseItem == 'IBM Public License Version 1.0'){
    return 'https://img.shields.io/badge/License-IPL%201.0-blue.svg'
  }
  if (licenseItem == 'The MIT Licens'){
    return 'https://img.shields.io/badge/License-MIT-yellow.svg'
  }
  if (licenseItem == 'Mozilla Public License 2.0e'){
    return 'https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg'
  }
  if (licenseItem == 'Open Database License (ODbL'){
    return 'https://img.shields.io/badge/License-ODbL-brightgreen.svg'
  }
  if(licenseItem == 'None'){
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenseItem) {
  if (licenseItem == 'Apache 2.0 License'){
    return 'https://opensource.org/licenses/Apache-2.0'
  }
  if (licenseItem == 'BSD 3-Clause License'){
    return 'https://opensource.org/licenses/BSD-3-Clause'
  }
  if (licenseItem == 'Eclipse Public License 1.0'){
    return 'https://opensource.org/licenses/EPL-1.0'
  }
  if (licenseItem == 'GNU GPL v3'){
    return 'https://www.gnu.org/licenses/gpl-3.0'
  }
  if (licenseItem == 'IBM Public License Version 1.0'){
    return 'https://opensource.org/licenses/IPL-1.0'
  }
  if (licenseItem == 'The MIT License'){
    return 'https://opensource.org/licenses/MIT'
  }
  if (licenseItem == 'Mozilla Public License 2.0e'){
    return 'https://opensource.org/licenses/MPL-2.0'
  }
  if (licenseItem == 'Open Database License (ODbL'){
    return 'https://opendatacommons.org/licenses/odbl/'
  }
  if (licenseItem == 'None'){
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  console.log(license.length);
  console.log(license[0]);
  var badge = ``;
  if (license == 'None'){
    return ``;
  }
  for (var i = 0; i<license.length; i++){
    var img = renderLicenseBadge(license[i]);
    var link = renderLicenseLink(license[i]);
    badge =  badge + `[![License](${img})](${link})\n`;
  }
    return `## License
${badge}`
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Description
  
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

  For any further questions regarding this project, please use the contact information below.

  -[GitHub Profile](https://github.com/${data.userName})
  
  -[Email](mailto:${data.email})

`;
}

module.exports = generateMarkdown;
