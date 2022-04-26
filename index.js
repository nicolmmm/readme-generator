//getting dependencies
const inquirer = require("inquirer");
const fs = require("fs");

//Generating html with answers generated from promptUser function
function generateHTML(answers) {
  const {
    name,
    license,
    description,
    installation,
    usage,
    contribute,
    github,
    email,
  } = answers;

  // switch statement to get license badge depending on user input
  let chosenLicense;
  switch (license) {
    case "Apache License 2.0":
      chosenLicense =
        "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "GNU General Public License v3.0":
      chosenLicense =
        "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "MIT License":
      chosenLicense =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "BSD 2-clause 'Simplified' license":
      chosenLicense =
        "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
      break;
    case "BSD 3-Clause 'New' or 'Revised' License":
      chosenLicense =
        "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      break;
    case "Boost Software License 1.0":
      chosenLicense =
        "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
      break;
    case "Creative Commons Zero v1.0 Universal":
      chosenLicense =
        "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
      break;
    case "Eclipse Public License 2.0":
      chosenLicense =
        "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
      break;
    case "GNU Affero General Public License v3.0":
      chosenLicense =
        "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "GNU General Public License v2.0":
      chosenLicense =
        "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
      break;
    case "Mozilla Public License 2.0":
      chosenLicense =
        "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      break;

    case "Other (please spicify in README File once generated)":
      chosenLicense = "";
      break;
  }
  //returned markdown file content:
  return `
 # ${name}

  Table of content\n
  
  [Description](#description)\n
  [License](#license)\n
  [Installation](#installation)\n
  [Usage](#usage)\n
  [Contribute](#contribute)\n
  [Questions](#questions)\n
  
  ## Description 
  
  * ${description}

  ## License
  
  
  * ${license}
  
  ${chosenLicense}

  
  ## Installation
  
  
  *${installation}

  ## Usage
  
  
  * ${usage} 

  ## Contribute
  
  
  * ${contribute}

  ## Questions!
  
  * 👩‍💻 ${github}
  * ✉️${email}
  `;
}

//using inquirer to collect user info from terminal
const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the name of your Application?",
    },
    {
      type: "list",
      name: "license",
      message: "What license does your application use?",
      choices: [
        "Apache License 2.0",
        "GNU General Public License v3.0",
        "MIT License",
        "BSD 2-clause 'Simplified' license",
        "BSD 3-Clause 'New' or 'Revised' License",
        "Boost Software License 1.0",
        "Creative Commons Zero v1.0 Universal",
        "Eclipse Public License 2.0",
        "GNU Affero General Public License v3.0",
        "GNU General Public License v2.0",
        "Mozilla Public License 2.0",
        "Other (please spicify in README File once generated)",
      ],
      default: "Other (please spicify in README File once generated)",
    },
    {
      type: "input",
      name: "description",
      message: "Describe your project",
    },
    {
      type: "input",
      name: "installation",
      message: "How to install application",
    },
    {
      type: "input",
      name: "usage",
      message: "How to use application",
    },
    {
      type: "input",
      name: "contribute",
      message: "How to contribute",
    },
    {
      type: "input",
      name: "github",
      message: "add your github link",
    },
    {
      type: "input",
      name: "email",
      message: "add your email account",
    },
  ]);
};
//using fs to write new file
const init = () => {
  promptUser()
    .then((answers) =>
      fs.writeFileSync("READMEexample.md", generateHTML(answers))
    )
    .then((answers) => console.log("README.md Successfully written!"))
    .catch((err) => console.error(err));
};

init();
