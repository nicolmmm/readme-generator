const inquirer = require("inquirer");
const fs = require("fs");

function generateHTML(answers) {
  const { name, description, installation, usage, contribute, github, email } =
    answers;

  return `
  # ${name}
  
  ## 📝Description 
  
    * ${description}

  
  ## 💾Installation
  
    *${installation}

  ## ⚙️Usage
  
    * ${usage} 

  ## 🤝Contribute
  
  * ${contribute}

  ## Contact!
  
  * 👩‍💻 ${github}
  * ✉️${email}
  `;
}

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the name of your Application?",
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

const init = () => {
  promptUser()
    .then((answers) => fs.writeFileSync("READMEtest.md", generateHTML(answers)))
    .then(() => console.log("Successfully wrote to README.md !"))
    .catch((err) => console.error(err));
};

init();
