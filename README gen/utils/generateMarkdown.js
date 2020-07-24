// function to generate markdown for README


function renderLicenseBadge(license) {
  var chosenLicense = "";
for (let i = 0; i < license.length; i++ ) {
   if (license[i] === " ") {
      chosenLicense += "%20";
   }
   else {
      chosenLicense += license[i]
   }
}
 
  return `![GitHub license](https://img.shields.io/badge/license-${chosenLicense}-blue.svg)`;
}

function renderLicenseLink() {}

function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)

  * [License](#license)
 
  * [Contributing](#contributing)
   
  * [Tests](#tests)

  * [Questions](#questions)
   
 
  ### Installation

  To install dependencies, run the following command:

  \`\`\`
  ${data.installation}
  \`\`\`

  ### Usage
  ${data.usage}
  
  
  ### License
  ${data.license}


  ### Contributing
  ${data.contributing}
  
  ### Tests
    ${data.tests}
        
  ### Questions
   
  
  If you have any questions about the repo, feel free to contact me through gitHub [${data.username}](https://github.com/${data.username})
  or directly at <${data.email}>


`;

}

module.exports = generateMarkdown;


